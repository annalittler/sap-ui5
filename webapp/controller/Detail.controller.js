sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
    "sap/m/MessageBox",
    "sap/m/CheckBox",
    "sap/ui/core/Fragment",
    "../formatter",
  ],
  function (
    Controller,
    UIComponent,
    History,
    MessageBox,
    CheckBox,
    Fragment,
    formatter
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
        console.log(oBinding);

        var check = this.byId("replenShelfCheck");
        console.log(check.getSelected());

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
      onCheckboxChange: function (e) {
        console.log(e.getParameters().selected);
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
        console.log(iValue);
      },
      onEmptyShelvesTag: function (e) {
        console.log("hi");
        var oModel = this.getView().getModel("emptyShelvesTag");
        // console.log(oModel);
        var state = e.getSource().getState();
        if (state === true) {
          var emptyShelvesTag = {
            status: true,
          };
          oModel.oData = emptyShelvesTag;
          oModel.refresh();
        }

        if (state === false) {
          var showImgs = {
            status: false,
          };
          oModel.oData = showImgs;
          oModel.refresh();
        }
      },
    });
  }
);
