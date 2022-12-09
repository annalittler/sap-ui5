sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/ui/core/UIComponent",
    "sap/ui/export/library",
    "sap/ui/export/Spreadsheet",
    "sap/ui/core/util/Export",
    "sap/ui/core/util/ExportTypeCSV",
    "sap/m/GroupHeaderListItem",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (
    Controller,
    MessageToast,
    MessageBox,
    JSONModel,
    Fragment,
    UIComponent,
    exportLibrary,
    Spreadsheet,
    Export,
    exportCSV,
    GroupHeaderListItem,
    Filter,
    FilterOperator
  ) {
    "use strict";

    // var EdmType = exportLibrary.EdmType;
    var oSelectedItems = [];

    return Controller.extend("sap.ui.demo.walkthrough.controller.List", {
      onInit: async function () {
        this.startedScanning = false;
        var oModel = this.getView().getModel("tableData");
        // var oData = oModel.getData();
        // console.log(oData);

        // console.log(oData.articles.length);
        // console.log("scanning started?", this.startedScanning);
        // var deleteModel = new JSONModel(obj);
        // sap.ui.getCore().setModel(deleteModel, "deleteModel");
        // this.setModel(deleteModel, "deleteModel");
      },

      onImgPress: function () {
        var model = this.getView().getModel("tableData");
        var data = model.getData();
        data.hello = [1, 2, 3, 4];
        console.log(model);
        model.refresh();
        var oAllData = this.getView().getModel("allData").getData().articles;
        // var length = this.getView().getModel("tableData").getData()
        //   .articles.length;
        // console.log(length);
        // console.log(oAllData);
        // console.log(this.getView("detail"));
        // var test = sap.ui.getCore().byId("emptySwitch");
        // console.log(test);
      },

      onShowImages: function (e) {
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        var state = e.getSource().getState();
        state === true
          ? (oData.showImgs.status = true)
          : (oData.showImgs.status = false);
        oModel.refresh();
      },

      onSettingsPopup: function () {
        var oView = this.getView();
        if (!this.byId("settingsBox")) {
          Fragment.load({
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.view.fragments.Settings",
            controller: this,
          }).then(function (oDialog) {
            console.log(oDialog);
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          this.byId("settingsBox").open();
        }
      },

      onAddItemPopup: function () {
        var oView = this.getView();
        if (!this.byId("addItemBox")) {
          Fragment.load({
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.view.fragments.AddItem",
            controller: this,
          }).then(function (oDialog) {
            console.log(oDialog);
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          this.byId("addItemBox").open();
        }
      },

      onCloseSettings: function () {
        this.byId("settingsBox").close();
      },

      onCloseSearchBox: function () {
        this.byId("searchBox").close();
      },

      onCloseAddItem: function () {
        this.byId("addItemBox").close();
      },

      onStopScan: function () {
        console.log(true);
        var closeBtn = this.byId("closeBtn");
        var scanBtn = this.byId("scanBtn");
        var scanner = this.byId("scandit-barcode-picker");
        this.byId("scandit-barcode-picker").setVisible(false);
        closeBtn.setVisible(false);
        scanBtn.setVisible(true);
        scanBtn.setEnabled(true);
        scanner.setVisible(false);
      },

      onAddItem: function () {
        var successTone = new Audio("./resources/success_tone.mp3");
        successTone.loop = false;
        var errorTone = new Audio("./resources/error_tone.mp3");
        errorTone.loop = false;
        var input = parseInt(this.getView().byId("searchInputVal").getValue());
        var oModel = this.getView().getModel("tableData");
        var oAllItems = this.getView().getModel("allData").getData().articles;
        var oData = oModel.getData();
        var oArticles = oData.articles;

        // oData.findIndex(items);
        // var index = oArticles.findIndex((items) => items.articleNo == input);
        // console.log(allItems);
        // console.log(mockData);
        if (oArticles.findIndex((item) => item.articleNo == input) == -1) {
          // console.log("hi");
          if (oAllItems.find((e) => e.articleNo === input)) {
            function existsInData(e) {
              return e.articleNo === input;
            }
            const index = oAllItems.findIndex(existsInData);
            oData.articles.unshift(oAllItems[index]);
            oModel.refresh();
            successTone.play();
          } else {
            MessageToast.show("Product not found");
            errorTone.play();
          }
        } else {
          MessageToast.show("Item already in list");
          errorTone.play();
        }
      },
      // onDeleteList: function () {
      //   var oModel = this.getView().getModel("tableData");
      //   var oData = oModel.getData();
      //   console.log(oData);
      //   MessageBox.confirm(
      //     `Are you sure you want to delete your list? (${oData.articles.length} items)`,
      //     {
      //       actions: [MessageBox.Action.OK, MessageBox.Action.CLOSE],
      //       emphasizedAction: MessageBox.Action.OK,
      //       onClose: function (sAction) {
      //         if (sAction === MessageBox.Action.OK) {
      //           oData.articles = [];
      //           oModel.refresh();
      //           MessageToast.show("List deleted");
      //         }
      //       },
      //     }
      //   );
      // },

      onDeleteItem: function (e) {
        // var oModel = this.getView().getModel("tableData");
        // var oData = oModel.getData();
        // var oList = this.getView().byId("listItems"); // get the list using its Id
        // var oSwipedItem = oList.getSwipedItem();

        // console.log(oSwipedItem);
        var oList = this.getView().byId("listItems"); // get the list using its Id
        var oSwipedItem = oList.getSwipedItem(); // Get which list item is swiped to delete
        oList.removeAggregation("items", oSwipedItem); // Remove this aggregation to delete list item from list
        oList.swipeOut(); // we are done, hide the swipeContent from screen

        var 

        // var oItem = e
        //   .getParameter("listItem")
        //   .getBindingContext("tableData")
        //   .getObject();
        // console.log(oItem);
        // // oModel.refresh();

        // var oArticles = oData.articles;

        // MessageBox.confirm("Are you sure you want to delete this item?", {
        //   actions: [MessageBox.Action.OK, MessageBox.Action.CLOSE],
        //   emphasizedAction: MessageBox.Action.OK,
        //   onClose: function (sAction) {
        //     if (sAction === MessageBox.Action.OK) {
        //       function existsInData(e) {
        //         return e.articleNo === oItem.articleNo;
        //       }
        //       const index = oArticles.findIndex(existsInData);
        //       oArticles.splice(index, 1);
        //       oModel.refresh();
        //       MessageToast.show("Item deleted");
        //     }
        //   },
        // });
      },
      onClickItem: function (e) {
        var oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("detail", {
          detailPath: window.encodeURIComponent(
            e.getSource().getBindingContext("tableData").getPath().substr(1)
          ),
        });
      },
      onOpenScan: function (e) {
        var oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("scan");
      },

      onNavReviewList: function (e) {
        var oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("review");
      },

      // onDeleteMenu: function () {
      //   var oModel = this.getView().getModel("tableData");
      //   var oData = oModel.oData;
      //   oModel.refresh();
      //   console.log(oData);
      //   var oDeleteMultiButton = this.byId("idButtonDeleteMulti");
      //   var oDeleteButton = this.byId("idButtonDelete");
      //   var list = this.byId("listItems");
      //   var listLastMode = list._sLastMode;
      //   console.log(listLastMode);
      //   if (listLastMode == "Delete") {
      //     oData.deleteMulti.status = true;
      //     // list.setMode("MultiSelect");
      //     list.setType("Navigation");
      //     oDeleteButton.setVisible(false);
      //     oDeleteMultiButton.setVisible(true);
      //     console.log(oDeleteButton);
      //   } else {
      //     oData.deleteMulti.status = false;
      //     // list.setMode("Delete");
      //     list.setType("Active");
      //     oDeleteMultiButton.setVisible(false);
      //     oDeleteButton.setVisible(true);
      //   }
      //   oModel.refresh();
      // },

      // onDeleteMenu: function () {
      //   var oModel = this.getView().getModel("tableData");
      //   var oData = oModel.getData();
      //   oModel.refresh();
      //   console.log(oData);
      //   var oDeleteMultiButton = this.byId("idButtonDeleteMulti");
      //   var oDeleteButton = this.byId("idButtonDelete");
      //   var list = this.byId("listItems");
      //   console.log(list);
      //   var listLastMode = list._sLastMode;
      //   console.log(listLastMode);
      //   if (listLastMode == "Delete") {
      //     list.setMode("MultiSelect");
      //     oData.deleteMulti.status = true;
      //     oDeleteButton.setVisible(false);
      //     oDeleteMultiButton.setVisible(true);
      //   } else {
      //     list.setMode("Delete");
      //     oData.deleteMulti.status = false;
      //     oDeleteMultiButton.setVisible(false);
      //     oDeleteButton.setVisible(true);
      //   }
      //   oModel.refresh();
      //   console.log(oData);
      // },

      // onExportPress: function () {
      //   var date = new Date();
      //   var oModel = this.getView().getModel("tableData");

      //   MessageBox.confirm("Are you sure you want to export the list?", {
      //     actions: [MessageBox.Action.OK, MessageBox.Action.CLOSE],
      //     emphasizedAction: MessageBox.Action.OK,
      //     onClose: function (sAction) {
      //       if (sAction === MessageBox.Action.OK) {
      //         if (oModel.oData.articles.length > 0) {
      //           var oExport = new Export({
      //             exportType: new exportCSV({
      //               // for xls....
      //               // fileExtension: "xls",
      //               // separatorChar: "\t",
      //               // charset: "utf-8",
      //               // mimeType: "application/vnd.ms-excel",

      //               // for CSV....
      //               charset: "utf-8",
      //               fileExtension: "csv",
      //               separatorChar: ",",
      //               mimeType: "application/csv",
      //             }),
      //             models: oModel,

      //             rows: {
      //               path: "/articles",
      //             },
      //             columns: [
      //               {
      //                 name: "Aisle No.",
      //                 template: {
      //                   content: "{aisle}",
      //                 },
      //               },
      //               {
      //                 name: "Article No.",
      //                 template: {
      //                   content: "{articleNo}",
      //                 },
      //               },
      //               {
      //                 name: "Name",
      //                 template: {
      //                   content: "{name}",
      //                 },
      //               },
      //               {
      //                 name: "Qty",
      //                 template: {
      //                   content: "{qty}",
      //                 },
      //               },
      //               {
      //                 name: "Stock on hand",
      //                 template: {
      //                   content: "{soh}",
      //                 },
      //               },
      //               {
      //                 name: "Pres. stock",
      //                 template: {
      //                   content: "{presStock}",
      //                 },
      //               },
      //               {
      //                 name: "Requested quantity",
      //                 template: {
      //                   content: "{amountRequired}",
      //                 },
      //               },
      //               {
      //                 name: "Empty shelf?",
      //                 template: {
      //                   content: "{isGap}",
      //                 },
      //               },
      //             ],
      //           });
      //           oExport
      //             .saveFile(`Gapbuster List ${date}`)
      //             .catch(function (oError) {
      //               sap.m.MessageToast.show(
      //                 "Generate is not possible because no model was set"
      //               );
      //               console.log(oError);
      //             })
      //             .then(function () {
      //               oExport.destroy();
      //             });
      //         } else {
      //           MessageToast.show("Cannot export empty list");
      //         }
      //       }
      //     },
      //   });
      // },
      onFilterItems: function (oEvent) {
        // var oView = this.getView();
        var sQuery = oEvent.getParameter("query");
        // console.log(sQuery);
        var oData = this.getView().getModel("tableData").getData();
        oData.searchQuery = sQuery;
        // console.log(oData);
        var oView = this.getView();

        if (!this.byId("searchBox")) {
          Fragment.load({
            id: oView.getId(),
            // id: "searchFragment",
            name: "sap.ui.demo.walkthrough.view.fragments.Search",
            controller: this,
          }).then(function (oDialog) {
            // console.log(oDialog);
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          this.byId("searchBox").open();
        }
        // build filter array

        // console.log(id);
        var aFilter = [];
        if (sQuery) {
          // var iQuery = parseInt(sQuery);
          aFilter.push(new Filter("name", FilterOperator.Contains, sQuery));
        }
        // filter binding
        // var oListStr = sap.ui.core.Fragment.createId(oView.getId(), "allItems");
        var oList = this.getView().byId("allItems");

        // var oList = sap.ui.core.Fragment.byId("searchFragment", "allItems");
        // var oList = sap.ui.getCore().byId("allItems");
        // var oList = this.byId("allItems");
        console.log(oList);

        var oBinding = oList.getBinding("items");
        // var fragmentId = this.getView().createId("searchFragment");
        // var tab = Fragment.byId(fragmentId, "allItems");
        console.log(oBinding);
        oBinding.filter(aFilter);
      },
      //   // build filter array
      //   var aFilter = [];
      //   var sQuery = oEvent.getParameter("query");
      //   if (sQuery) {
      //     aFilter.push(new Filter("name", FilterOperator.Contains, sQuery));
      //   }

      //   // filter binding
      //   var oList = this.byId("listItems");
      //   var oBinding = oList.getBinding("items");
      //   oBinding.filter(aFilter);
      // },
      // getGroup: function (oContext) {
      //   var sKey = oContext.getProperty("aisle");
      //   return {
      //     key: sKey,
      //     title: "Aisle " + sKey || "No Aisle Assigned",
      //   };
      // },
      // getGroupHeader: function (oGroup) {
      //   return new sap.m.GroupHeaderListItem({
      //     title: oGroup.title,
      //     upperCase: false,
      //   });
      // },

      onDeleteMulti: function () {
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        var oList = this.byId("listItems");
        var oItems = oList.getSelectedItems();
        MessageBox.warning(
          `Are you sure you want to delete ${oItems.length} ${
            oItems.length > 1 ? "items" : "item"
          }?`,
          {
            actions: [MessageBox.Action.OK, MessageBox.Action.CLOSE],
            emphasizedAction: MessageBox.Action.OK,
            onClose: function (sAction) {
              if (sAction === MessageBox.Action.OK) {
                for (var i = oItems.length - 1; i >= 0; i--) {
                  var path = oItems[i].getBindingContextPath();
                  var index = parseInt(
                    path.substring(path.lastIndexOf("/") + 1)
                  );
                  oData.articles.splice(index, 1);
                  MessageToast.show(
                    `${oItems.length} ${
                      oItems.length > 1 ? "items" : "item"
                    } deleted`
                  );
                }
              }
              oModel.refresh();
            },
          }
        );
      },
      onEmptyShelvesAutoTag: function (e) {
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        var state = e.getSource().getState();

        state === true
          ? (oData.emptyShelvesAutoTag.status = true)
          : (oData.emptyShelvesAutoTag.status = false);
        console.log(oData.emptyShelvesAutoTag);
        // if (state === true) {
        //   MessageBox.confirm(
        //     'Are you sure you want to turn on the Empty Shelf Auto-tag? All future scans will be tagged as "Empty Shelf".',
        //     {
        //       actions: [MessageBox.Action.OK, MessageBox.Action.CLOSE],
        //       emphasizedAction: MessageBox.Action.OK,
        //       onClose: function (sAction) {
        //         sAction === MessageBox.Action.OK
        //           ? (oData.emptyShelvesAutoTag.status = true)
        //           : (oData.emptyShelvesAutoTag.status = false);
        //       },
        //     }
        //   );
        // }

        oModel.refresh();
      },

      onClickItemSearchFrag: function (e) {
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        var oPickedItems = oModel.getData().articles;
        var oAllData = this.getView().getModel("allData").getData().articles;
        var sObjPath = e.getSource().getBindingContext("allData").getPath();
        var index = parseInt(sObjPath.substring(sObjPath.lastIndexOf("/") + 1));
        var oItemArticleNo = oAllData[index].articleNo;
        var oNewItem = [];
        if (
          oPickedItems.some((item) => item.articleNo == oItemArticleNo) ===
          false
        ) {
          oNewItem.push(oAllData[index]);
          const oCurrentData = oModel.getProperty("/articles");
          const oNewData = oNewItem.concat(oCurrentData);
          oModel.setProperty("/articles", oNewData);
          console.log(oPickedItems);
          MessageToast.show("Item added to list");
          oNewData[0].isGap = oData.emptyShelvesAutoTag.status;
        } else {
          MessageToast.show("Item already in list");
        }
        oModel.refresh();

        // console.log(oPickedItems);
      },
      listGapSwitch: function (e) {
        var oView = this.getView();
        var oModel = oView.getModel("tableData");
        var oData = oModel.getData();
        var oBinding = e.getSource().getBindingContext("tableData");
        var sPath = oBinding.getPath();
        var iIndex = parseInt(sPath.substring(sPath.lastIndexOf("/") + 1));
        var bState = e.getParameter("state");
        var oItem = oData.articles[iIndex];
        // if (bState === true) {
        //   oItem.manualGap = true;
        // } else oItem.manualGap = false;
        console.log(bState);
        // console.log(oItem);
        // bState === true ? (oItem.isGap = true) : (oItem.isGap = false);
        oItem.isGap = bState;
        // console.log(oItem.isGap);
        // oItem.isGap = bState;
        console.log("status:", oItem.isGap);
        console.log(oItem);

        // var sObjPath = this.getView().mObjectBindingInfos.tableData.path;
        // var index = parseInt(sObjPath.substring(sObjPath.lastIndexOf("/") + 1));
        // var oItem = oData.articles[index];
        // var bState = this.byId("emptySwitch").getState();
        // if (bState === true) {
        //   oItem.manualGap = true;
        // } else oItem.manualGap = false;
        // // console.log(oSwitch.getState());
        // // var state = e.getParameters().selected;
        // console.log(oItem);
        // var stockOnShelfStepInput = this.byId("stockOnShelfStepInput");
        // bState === true
        //   ? ((oData.shelfIsEmpty.status = true),
        //     stockOnShelfStepInput.setValue(0))
        //   : (oData.shelfIsEmpty.status = false);
      },
    });
  }
);
