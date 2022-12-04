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
        // console.log(oBinding);

        // var checkbox = this.byId("emptyCheckbox");
        // console.log(checkbox);
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
      onEmptyShelfCheckChange: function (e) {
        var state = e.getParameters().selected;
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        var stockOnShelfStepInput = this.byId("stockOnShelfStepInput");
        state === true
          ? ((oData.shelfIsEmpty.status = true),
            stockOnShelfStepInput.setValue(0))
          : (oData.shelfIsEmpty.status = false);
      },

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
      // onEmptyShelvesAutoTag: function (e) {
      //   var oModel = this.getView().getModel("tableData");
      //   var oData = oModel.getData();
      //   var state = e.getSource().getState();
      //   state === true
      //     ? (oData.emptyShelvesAutoTag.status = true)
      //     : (oData.emptyShelvesAutoTag.status = false);
      //   oModel.refresh();
      // },

      onReplenShelfCheck: function (e) {
        var state = e.getParameters().selected;
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        oData.replenShelfCheck.status = state;
        oModel.refresh();
        var listItem = this.byId("replenClItem");
        state === true
          ? listItem.setSelected(true)
          : listItem.setSelected(false);
      },
      onReportBtlCheck: function (e) {
        var state = e.getParameters().selected;
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        oData.reportBtlCheck.status = state;
        oModel.refresh();
        var listItem = this.byId("reportClItem");
        state === true
          ? listItem.setSelected(true)
          : listItem.setSelected(false);
      },
      onStockOnShelfSelect: function (e) {
        var state = e.getParameters().selected;
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

        var shelfEmpty = oData.shelfIsEmpty.status;
        var shelfEmptyAutoTag = oData.emptyShelvesAutoTag.status;
        shelfEmpty || shelfEmptyAutoTag
          ? emptyShelfCheck.setState(false)
          : emptyShelfCheck.setState(true);
      },

      onReqQuantitySelect: function (e) {
        var state = e.getParameters().selected;
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        oData.reqQuantitySelect.status = state;
        oModel.refresh();
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
        // console.log(oItem);
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
