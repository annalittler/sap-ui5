sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
    "sap/m/MessageBox",
    "sap/m/CheckBox",
    "sap/ui/core/Fragment",
    "../formatter",
    "sap/ui/core/Popup",
    "sap/m/MessageToast",
  ],
  function (
    Controller,
    UIComponent,
    History,
    MessageBox,
    CheckBox,
    Fragment,
    formatter,
    Popup,
    MessageToast
  ) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.Detail", {
      formatter: formatter,

      onInit: function (e) {
        var oRouter = UIComponent.getRouterFor(this);
        oRouter
          .getRoute("detail")
          .attachPatternMatched(this._onObjectMatched, this);
        var oBinding = this.getView().getBindingContext();
      },
      _onObjectMatched: function (oEvent) {
        this.getView().bindElement({
          path:
            "/" +
            window.decodeURIComponent(
              oEvent.getParameter("arguments").detailPath
            ),
          model: "tableData",
        });
      },
      onNavBack: function () {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();
        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          var oRouter = UIComponent.getRouterFor(this);
          oRouter.navTo("list");
        }
      },
      // onImgPress: function (e) {
      //   var oBinding = this.getView().getBindingContext();
      //   console.log(oBinding);
      // },

      onUpdatePresStock: function () {
        var oView = this.getView();
        if (!this.byId("updatePresStockBox")) {
          Fragment.load({
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.view.fragments.UpdatePresStock",
            controller: this,
          }).then(function (oDialog) {
            console.log(oDialog);
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          this.byId("updatePresStockBox").open();
        }
      },
      onCloseUpdatePresStock: function () {
        this.byId("updatePresStockBox").close();
      },
      onChangePresStock: function (e) {
        var iValue = e.getParameters();
        // console.log(iValue);
      },

      onReplenShelfCheck: function (e) {
        var state = e.getParameter("selected");
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        // var oBinding = this.getView().getBindingContext("tableData");
        // var sObjPath = oBinding.getPath();
        // var iIndex = parseInt(
        //   sObjPath.substring(sObjPath.lastIndexOf("/") + 1)
        // );
        // var iSoh = oData.articles[iIndex].soh;
        // if (iSoh <= 0) {
        // }
        // console.log(iSoh <= 0);
        oData.replenShelfCheck.status = state;
        oModel.refresh();
        var listItem = this.byId("replenClItem");
        state === true
          ? listItem.setSelected(true)
          : listItem.setSelected(false);
      },
      onReportBtlCheck: function (e) {
        var state = e.getParameter("selected");
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        oData.reportBtlCheck.status = state;
        oModel.refresh();
        var listItem = this.byId("reportClItem");
        state === true
          ? listItem.setSelected(true)
          : listItem.setSelected(false);
      },

      onEmptyShelfCheckChange: function (e) {
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        var sObjPath = this.getView().mObjectBindingInfos.tableData.path;
        var index = parseInt(sObjPath.substring(sObjPath.lastIndexOf("/") + 1));
        var oItem = oData.articles[index];
        var emptySwitch = this.byId("emptySwitch");
        console.log(emptySwitch.getState());

        // var bState = this.byId("emptySwitch").getState();
        // console.log(bState);
        // console.log(oSwitch.getState());
        // var state = e.getParameters().selected;
        var stockOnShelfStepInput = this.byId("stockOnShelfStepInput");
        oItem.isGap ? stockOnShelfStepInput.setValue(0) : null;
        // console.log(oItem);
      },

      onImgPress: function () {
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        var sObjPath = this.getView().mObjectBindingInfos.tableData.path;
        var index = parseInt(sObjPath.substring(sObjPath.lastIndexOf("/") + 1));
        var oItem = oData.articles[index];
        console.log(oItem);
      },

      onStockOnShelfSelect: function (e) {
        var state = e.getParameter("selected");
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        oData.stockOnShelfSelect.status = state;
        oModel.refresh();
      },
      onStockOnShelfChange: function (e) {
        // var stepInput = this.byId("stockOnShelfStepInput");
        // var stockOnShelfStepInput = this.byId("stockOnShelfStepInput");

        var emptyShelfCheck = this.byId("emptySwitch");
        // var state = e.getParameters().selected;
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        var iValue = e.getParameter("value");
        var sObjPath = this.getView().mObjectBindingInfos.tableData.path;
        var index = parseInt(sObjPath.substring(sObjPath.lastIndexOf("/") + 1));
        var oItem = oData.articles[index];
        console.log(oItem);
        if (iValue > 0) {
          oItem.isGap = false;
          emptyShelfCheck.setState(false);
        }
        if (iValue === 0) {
          oItem.isGap = true;
          emptyShelfCheck.setState(true);
        }
        // console.log(oItem);

        // var shelfEmpty = oData.shelfIsEmpty.status;
        // var shelfEmptyAutoTag = oData.emptyShelvesAutoTag.status;
        // shelfEmpty || shelfEmptyAutoTag
        //   ? isGap.setState(false)
        //   : emptyShelfCheck.setState(true);
      },

      onReqQuantitySelect: function (e) {
        var state = e.getParameter("selected");
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        oData.reqQuantitySelect.status = state;
        oModel.refresh();
        // console.log("test", state);
      },
      onSubmitItem: function (e) {
        var oView = this.getView("List");
        var oEmptyShelfCheck = this.byId("emptySwitch");
        var bIsShelfEmpty = oEmptyShelfCheck.getState();
        var oModel = oView.getModel("tableData");
        var oData = oModel.getData();
        var iStockOnShelf = this.byId("stockOnShelfStepInput").getValue();
        var sObjPath = this.getView().mObjectBindingInfos.tableData.path;
        var index = parseInt(sObjPath.substring(sObjPath.lastIndexOf("/") + 1));
        var oItem = oData.articles[index];
        var iAmountRequired = oItem.presStock - iStockOnShelf;
        oItem.requestedQuantity = iAmountRequired;
        oItem.isShelfEmpty = bIsShelfEmpty;
        // var id = sap.ui.core.Fragment.createId(
        //   oView.getId(),
        //   "emptyShelvesSwitchSettings"
        // );
        // var oAutoGapTag = this.byId(id);
        // console.log(oAutoGapTag);

        // console.log(oItem);
        if (oData.emptyShelvesAutoTag || bIsShelfEmpty) {
        }

        oModel.refresh();
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();
        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          var oRouter = UIComponent.getRouterFor(this);
          oRouter.navTo("list");
        }
      },
      onReqQuantityInputChange: function () {
        var oStepInput = this.byId("reqQuantityStepInput");
        // console.log(oStepInput);
        var iReqQuantity = this.byId("reqQuantityStepInput").getValue();
        var iReqQuantityMax = this.byId("reqQuantityStepInput").getMax();
        if (iReqQuantity === iReqQuantityMax) {
          oStepInput.setValueState("Error");
          oStepInput.setValueStateText(
            "Maximum of products in stock has been reached."
          );
        } else {
          oStepInput.setValueState("None");
        }
      },
    });
  }
);
