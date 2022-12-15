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

    var oSelectedItems = [];

    return Controller.extend("sap.ui.demo.walkthrough.controller.List", {
      onInit: async function () {
        this.startedScanning = false;
        var oModel = this.getView().getModel("tableData");
      },

      onImgPress: function () {
        var model = this.getView().getModel("tableData");
        var data = model.getData();
        data.hello = [1, 2, 3, 4];
        console.log(model);
        model.refresh();
        var oAllData = this.getView().getModel("allData").getData().articles;
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

        if (oArticles.findIndex((item) => item.articleNo == input) == -1) {
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
      onDeleteItem: function (e) {
        var oModel = this.getView().getModel("tableData");
        const oArticles = oModel.getProperty("/articles");

        var oList = this.getView().byId("listItems"); // get the list using its Id
        var oSwipedItem = oList.getSwipedItem(); // Get which list item is swiped to delete
        var oBinding = oSwipedItem.getBindingContext("tableData");

        MessageBox.confirm("Are you sure you want to delete this item?", {
          actions: [MessageBox.Action.OK, MessageBox.Action.CLOSE],
          emphasizedAction: MessageBox.Action.OK,
          onClose: function (sAction) {
            if (sAction === MessageBox.Action.OK) {
              var sPath = oBinding.getPath();
              var iIndex = parseInt(
                sPath.substring(sPath.lastIndexOf("/") + 1)
              );
              console.log(iIndex);
              oArticles.splice(iIndex, 1);
              var newArticles = oArticles.concat([]);
              oModel.setProperty("/articles", newArticles);
              MessageToast.show("Item deleted");
              oModel.refresh(true);
              oList.swipeOut(); // we are done, hide the swipeContent from screen
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

      onNavReviewList: function (e) {
        var oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("review");
      },

      onFilterItems: function (oEvent) {
        var sQuery = oEvent.getParameter("query");
        var oData = this.getView().getModel("tableData").getData();
        oData.searchQuery = sQuery;
        var oView = this.getView();

        if (!this.byId("searchBox")) {
          Fragment.load({
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.view.fragments.Search",
            controller: this,
          }).then(function (oDialog) {
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          this.byId("searchBox").open();
        }

        var aFilter = [];
        if (sQuery) {
          aFilter.push(new Filter("name", FilterOperator.Contains, sQuery));
        }
        var oList = this.getView().byId("allItems");

        console.log(oList);

        var oBinding = oList.getBinding("items");
        console.log(oBinding);
        oBinding.filter(aFilter);
      },
      onEmptyShelvesAutoTag: function (e) {
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        var state = e.getSource().getState();

        state === true
          ? (oData.emptyShelvesAutoTag.status = true)
          : (oData.emptyShelvesAutoTag.status = false);
        console.log(oData.emptyShelvesAutoTag);
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
          MessageToast.show("Item added to list");
          oNewData[0].isGap = oData.emptyShelvesAutoTag.status;
        } else {
          MessageToast.show("Item already in list");
        }
        oModel.refresh();
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
        console.log(bState);
        oItem.isGap = bState;
        console.log("status:", oItem.isGap);
        console.log(oItem);
      },
    });
  }
);
