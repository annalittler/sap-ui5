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

        this.getRouter().initialize();

        const obj = {
          articles: [
            {
              name: "PAMS PURE PLAIN FLOUR",
              qty: "1.5KG",
              price: 1.99,
              articleNo: 5003829,
              barcode: 50038299,
              image:
                "https://grocer-img.sgp1.cdn.digitaloceanspaces.com/products/3885142916237945.avif",
              soh: 8,
              presStock: 12,
              aisle: 3,
              delivery: "25/12/2022",
            },
            {
              name: "TARARUA BUTTER",
              qty: "500G",
              price: 6.49,
              articleNo: 5013622,
              image:
                "https://grocer-img.sgp1.cdn.digitaloceanspaces.com/products/3765420344565789.avif",
              soh: 0,
              presStock: 18,
              aisle: 10,
              delivery: "25/12/2022",
            },
            {
              name: "CHELSEA WHITE SUGAR",
              qty: "1.5KG",
              price: 3.19,
              articleNo: 5002760,
              image:
                "https://grocer-img.sgp1.cdn.digitaloceanspaces.com/products/4560913944979699.avif",
              soh: 34,
              presStock: 16,
              aisle: 3,
              delivery: "25/12/2022",
            },
          ],
        };

        var tableModel = new JSONModel(obj);

        sap.ui.getCore().setModel(tableModel, "tableData");
        this.setModel(tableModel, "tableData");

        var oData = tableModel.getData();

        // oData.deleteMulti = { status: false };
        // oData.emptyShelvesAutoTag = { status: true };
        // oData.shelfIsEmpty = { status: oData.emptyShelvesAutoTag.status };
        // oData.showImgs = { status: true };
        // oData.replenShelfCheck = { status: false };
        // oData.reportBtlCheck = { status: false };
        // oData.stockOnShelfSelect = { status: false };
        // oData.reqQuantitySelect = { status: true };
        // oData.allData =
        // console.log(oData);
      },
    });
  }
);
