sap.ui.define(
  ["sap/m/Button", "sap/ui/core/mvc/XMLView"],
  (Button, XMLView) => {
    "use strict";
    XMLView.create({
      viewName: "sap.ui.demo.walkthrough.view.App",
    }).then((oView) => {
      oView.placeAt("content");
    });

    new Button({
      text: "hello world",
    }).placeAt("content");
  }
);
