sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        manifest: "json",
      },
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);

        var showImgs = {
          state: false,
        };

        this.getRouter().initialize();

        var oModel = new JSONModel(showImgs);
        this.setModel(oModel, "showImgs");

        const obj = {
          title: "Picked Items",
          articles: [
            {
              name: "NATURE'S FRESH BREAD WHITE TOAST",
              qty: "700G",
              price: 3.49,
              articleNo: 5026067,
              stock: true,
              image:
                "https://grocer-img.sgp1.cdn.digitaloceanspaces.com/products/7138028174164914.avif",
              soh: 2,
              presStock: 0,
            },
            {
              name: "TARARUA BUTTER",
              qty: "500G",
              price: 6.49,
              articleNo: 5013622,
              image:
                "https://grocer-img.sgp1.cdn.digitaloceanspaces.com/products/3765420344565789.avif",
              soh: 54,
              presStock: 3,
            },
            {
              name: "CHELSEA WHITE SUGAR",
              qty: "1.5KG",
              price: 3.19,
              articleNo: 5002760,
              image:
                "https://grocer-img.sgp1.cdn.digitaloceanspaces.com/products/4560913944979699.avif",
              soh: 34,
              presStock: 0,
            },
            {
              name: "ALL GOOD OAT MILK BARISTA",
              qty: "1L",
              price: 4.49,
              articleNo: 5273270,
              image:
                "https://grocer-img.sgp1.cdn.digitaloceanspaces.com/products/544443431544691.avif",
              soh: 0,
              presStock: 0,
            },
          ],
        };

        let tableModel = new JSONModel(obj);
        sap.ui.getCore().setModel(tableModel, "tableData");
        this.setModel(tableModel, "tableData");
      },
    });
  }
);
