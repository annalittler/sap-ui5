sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      incrementBy1: function () {
        let myTextElem = this.getView().byId("counter");
        let myNum = parseInt(myTextElem.getText());
        let myNewNum = myNum + 1;
        myTextElem.setText(myNewNum);
      },
      reset: function () {
        let myTextElem = this.getView().byId("counter");
        myTextElem.setText("0");
      },
      sayHi: function () {
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel("dataModel")
          .getProperty("/search/item");
        var sMsg = oBundle.getText("helloPerson", [sRecipient]);
        // Show message
        MessageToast.show(sMsg);
      },
    });
  }
);
