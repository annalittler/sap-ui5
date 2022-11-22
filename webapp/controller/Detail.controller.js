sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
  ],
  function (Controller, UIComponent, History) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.Detail", {
      onInit: function (e) {
        var oRouter = UIComponent.getRouterFor(this);
        oRouter
          .getRoute("detail")
          .attachPatternMatched(this._onObjectMatched, this);
        var oBinding = this.getView().getBindingContext();
        console.log(oBinding);
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
      onImgPress: function (e) {
        var oBinding = this.getView().getBindingContext();
        console.log(oBinding);
      },
    });
  }
);
