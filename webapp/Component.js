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

        // set data model
        let oDataName = {
          search: {
            item: "",
          },
        };
        let oModelData = new JSONModel(oDataName);
        this.setModel(oModelData, "dataModel");

        //set table data
        let tableModel = new JSONModel();
        tableModel.loadData("./Data.json");
        this.setModel(tableModel, "tableData");
        // console.log(oModelTable);
      },
    });
  }
);
