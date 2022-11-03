sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.component", {
      metadata: {
        manifest: "json",
      },
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);

        var showImgs = {
          state: false,
        };
        var oModel = new JSONModel(showImgs);
        this.setModel(oModel, "showImgs");

        const obj = {
          title: "Picked Items",
          articles: [
            // {
            //   name: "NATURE'S FRESH BREAD WHITE TOAST",
            //   qty: "700G",
            //   price: 3.49,
            //   articleNo: 5026067,
            //   stock: true,
            //   image:
            //     "https://grocer-img.sgp1.cdn.digitaloceanspaces.com/products/7138028174164914.avif",
            //   soh: 2,
            //   presStock: 0,
            // },
          ],
        };

        let tableModel = new JSONModel(obj);
        // tableModel.loadData("./Data.json");
        this.setModel(tableModel, "tableData");

        // console.log(oTableModel);
        // let oArticles = {
        //   articles: {},
        // };
        // oArticles.articles.push({
        //   name: "Anna",
        // });
        // let oArticleData = new JSONModel(oArticles);
        // this.setModel(oModelData, "dataModel");
      },
    });
  }
);
