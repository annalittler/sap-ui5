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
        var oData = this.getView().getModel("tableData1").getData();
        oData.deleteMulti = { status: false };
        oData.emptyShelvesAutoTag = { status: true };
        oData.shelfIsEmpty = {
          status: oData.emptyShelvesAutoTag.status,
        };
        oData.showImgs = { status: true };
        oData.replenShelfCheck = { status: false };
        oData.reportBtlCheck = { status: false };
        oData.stockOnShelfSelect = { status: false };
        oData.reqQuantitySelect = { status: true };
        oData.pickedItems = [];
        console.log(oData);

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
        var model1 = this.getView().getModel("tableData1");
        var data = model.getData();
        var data1 = model1.getData();
        data.hello = [1, 2, 3, 4];
        console.log(data);
        console.log(data1);
        model.refresh();
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
        var input = parseInt(this.getView().byId("searchInputVal").getValue());
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        var oArticles = oData.articles;

        // oData.findIndex(items);
        var index = oArticles.findIndex((items) => items.articleNo == input);
        if (oArticles.findIndex((item) => item.articleNo == input) == -1) {
          console.log("hi");
          if (mockData.find((e) => e.articleNo === input)) {
            function existsInData(e) {
              return e.articleNo === input;
            }
            const index = mockData.findIndex(existsInData);
            oData.articles.unshift(mockData[index]);
            oModel.refresh();
          } else {
            MessageToast.show("Product not found");
          }
        } else {
          MessageToast.show("Item already in list");
        }
      },
      onDeleteList: function () {
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        console.log(oData);
        MessageBox.confirm(
          `Are you sure you want to delete your list? (${oData.articles.length} items)`,
          {
            actions: [MessageBox.Action.OK, MessageBox.Action.CLOSE],
            emphasizedAction: MessageBox.Action.OK,
            onClose: function (sAction) {
              if (sAction === MessageBox.Action.OK) {
                oData.articles = [];
                oModel.refresh();
                MessageToast.show("List deleted");
              }
            },
          }
        );
      },

      onDeleteItem: function (e) {
        var arr = [];

        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();

        var oItem = e
          .getParameter("listItem")
          .getBindingContext("tableData")
          .getObject();
        console.log(oItem);
        // oModel.refresh();

        var oArticles = oData.articles;

        MessageBox.confirm("Are you sure you want to delete this item?", {
          actions: [MessageBox.Action.OK, MessageBox.Action.CLOSE],
          emphasizedAction: MessageBox.Action.OK,
          onClose: function (sAction) {
            if (sAction === MessageBox.Action.OK) {
              function existsInData(e) {
                return e.articleNo === oItem.articleNo;
              }
              const index = oArticles.findIndex(existsInData);
              oArticles.splice(index, 1);
              oModel.refresh();
              MessageToast.show("Item deleted");
            }
          },
        });
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

      onDeleteMenu: function () {
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        oModel.refresh();
        console.log(oData);
        var oDeleteMultiButton = this.byId("idButtonDeleteMulti");
        var oDeleteButton = this.byId("idButtonDelete");
        var list = this.byId("listItems");
        console.log(list);
        var listLastMode = list._sLastMode;
        console.log(listLastMode);
        if (listLastMode == "Delete") {
          list.setMode("MultiSelect");
          oData.deleteMulti.status = true;
          oDeleteButton.setVisible(false);
          oDeleteMultiButton.setVisible(true);
        } else {
          list.setMode("Delete");
          oData.deleteMulti.status = false;
          oDeleteMultiButton.setVisible(false);
          oDeleteButton.setVisible(true);
        }
        oModel.refresh();
        console.log(oData);
      },

      onExportPress: function () {
        // var time = getTime();
        var date = new Date();
        // getting model into oModel variable.
        var oModel = this.getView().getModel("tableData");

        MessageBox.confirm("Are you sure you want to export the list?", {
          actions: [MessageBox.Action.OK, MessageBox.Action.CLOSE],
          emphasizedAction: MessageBox.Action.OK,
          onClose: function (sAction) {
            if (sAction === MessageBox.Action.OK) {
              if (oModel.oData.articles.length > 0) {
                var oExport = new Export({
                  exportType: new exportCSV({
                    // for xls....
                    // fileExtension: "xls",
                    // separatorChar: "\t",
                    // charset: "utf-8",
                    // mimeType: "application/vnd.ms-excel",

                    // for CSV....
                    charset: "utf-8",
                    fileExtension: "csv",
                    separatorChar: ",",
                    mimeType: "application/csv",
                  }),
                  models: oModel,

                  rows: {
                    path: "/articles",
                  },
                  columns: [
                    {
                      name: "Aisle No.",
                      template: {
                        content: "{aisle}",
                      },
                    },
                    {
                      name: "Article No.",
                      template: {
                        content: "{articleNo}",
                      },
                    },
                    {
                      name: "Name",
                      template: {
                        content: "{name}",
                      },
                    },
                    {
                      name: "Qty",
                      template: {
                        content: "{qty}",
                      },
                    },
                    {
                      name: "Stock on hand",
                      template: {
                        content: "{soh}",
                      },
                    },
                    {
                      name: "Pres. stock",
                      template: {
                        content: "{presStock}",
                      },
                    },
                    {
                      name: "Requested quantity",
                      template: {
                        content: "{amountRequired}",
                      },
                    },
                    {
                      name: "Empty shelf?",
                      template: {
                        content: "{isShelfEmpty}",
                      },
                    },
                  ],
                });
                oExport
                  .saveFile(`Gapbuster List ${date}`)
                  .catch(function (oError) {
                    sap.m.MessageToast.show(
                      "Generate is not possible beause no model was set"
                    );
                  })
                  .then(function () {
                    oExport.destroy();
                  });
              } else {
                MessageToast.show("Cannot export empty list");
              }
            }
          },
        });
      },
      onFilterItems: function (oEvent) {
        // build filter array
        var aFilter = [];
        var sQuery = oEvent.getParameter("query");
        if (sQuery) {
          aFilter.push(new Filter("name", FilterOperator.Contains, sQuery));
        }

        // filter binding
        var oList = this.byId("listItems");
        var oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },
      getGroup: function (oContext) {
        var sKey = oContext.getProperty("aisle");
        return {
          key: sKey,
          title: "Aisle " + sKey || "No Aisle Assigned",
        };
      },
      getGroupHeader: function (oGroup) {
        return new sap.m.GroupHeaderListItem({
          title: oGroup.title,
          upperCase: false,
        });
      },
      onSelectionChange: function (oEvent) {
        var oList = oEvent.getSource();
        // var oLabel = this.byId("idFilterLabel");
        // var oInfoToolbar = this.byId("idInfoToolbar");

        // With the 'getSelectedContexts' function you can access the context paths
        // of all list items that have been selected, regardless of any current
        // filter on the aggregation binding.
        // var aContexts = oList.getSelectedContexts(true);

        // update UI
        // var bSelected = aContexts && aContexts.length > 0;
        // var sText = bSelected ? aContexts.length + " selected" : null;
        // oInfoToolbar.setVisible(bSelected);
        // oLabel.setText(sText);
        // console.log(aContexts);
        // console.log(aContexts.length);

        // for (let i = 0; i < aContexts.length; i++) {

        // }
        // aContexts.forEach(function (item) {
        //   console.log(item.sPath.slice(10));
        // });

        // console.log(oItems);
      },
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
        console.log(state);
        state === true
          ? (oData.emptyShelvesAutoTag.status = true)
          : (oData.emptyShelvesAutoTag.status = false);
        oModel.refresh();
      },
    });
  }
);
