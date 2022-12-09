sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/UIComponent",
    "sap/ui/core/Fragment",
    "sap/ui/export/library",
    "sap/ui/export/Spreadsheet",
    "sap/ui/core/util/Export",
    "sap/ui/core/util/ExportTypeCSV",
  ],
  function (
    Controller,
    MessageBox,
    UIComponent,
    Fragment,
    exportLibrary,
    Spreadsheet,
    Export,
    exportCSV
  ) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.Review", {
      onInit: async function () {
        console.log("hello");
      },
      getGroup: function (oContext) {
        var sKey = oContext.getProperty("aisle");
        return {
          key: sKey,
          title: "Aisle " + sKey || "No Aisle Assigned",
        };
      },
      getGroupHeader: function (oGroup) {
        return new sap.m.GroupHeaderListItem({
          title: oGroup.title,
          upperCase: false,
        });
      },
      onDeleteList: function () {
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        console.log(oData);
        MessageBox.confirm(
          `Are you sure you want to delete your list? (${oData.articles.length} items)`,
          {
            actions: [MessageBox.Action.OK, MessageBox.Action.CLOSE],
            emphasizedAction: MessageBox.Action.OK,
            onClose: function (sAction) {
              if (sAction === MessageBox.Action.OK) {
                oData.articles = [];
                oModel.refresh();
                MessageToast.show("List deleted");
              }
            },
          }
        );
      },
      onDeleteMenu: function () {
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        oModel.refresh();
        console.log(oData);
        var oMultiSelectBtn = this.byId("idMultiSelectBtn");
        // var oDeleteMultiButton = this.byId("idButtonDeleteMulti");
        var oMultiSelectCancel = this.byId("idMultiSelectCancel");
        var list = this.byId("listItems");
        console.log(list);
        var listLastMode = list._sLastMode;
        console.log(listLastMode);
        var oHBox = this.byId("idListHBox");
        if (listLastMode == "Delete") {
          list.setMode("MultiSelect");
          oData.deleteMulti.status = true;
          oMultiSelectBtn.setVisible(false);
          oMultiSelectCancel.setVisible(true);
          oHBox.setClass("sapUiNoMargin");
        } else {
          list.setMode("Delete");
          oData.deleteMulti.status = false;
          oMultiSelectBtn.setVisible(true);
          oMultiSelectCancel.setVisible(false);
        }
        oModel.refresh();
        console.log(oData);
      },

      onClickItem: function (e) {
        var oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("detail", {
          detailPath: window.encodeURIComponent(
            e.getSource().getBindingContext("tableData").getPath().substr(1)
          ),
        });
      },
      onSettingsPopup: function () {
        var oView = this.getView();
        if (!this.byId("settingsBox")) {
          Fragment.load({
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.view.fragments.Settings",
            controller: this,
          }).then(function (oDialog) {
            console.log(oDialog);
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          this.byId("settingsBox").open();
        }
      },
      onShowImages: function (e) {
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        var state = e.getSource().getState();
        state === true
          ? (oData.showImgs.status = true)
          : (oData.showImgs.status = false);
        oModel.refresh();
      },
      onCloseSettings: function () {
        this.byId("settingsBox").close();
      },
      onDeleteItem: function (e) {
        var arr = [];

        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();

        var oItem = e
          .getParameter("listItem")
          .getBindingContext("tableData")
          .getObject();
        console.log(oItem);
        // oModel.refresh();

        var oArticles = oData.articles;

        MessageBox.confirm("Are you sure you want to delete this item?", {
          actions: [MessageBox.Action.OK, MessageBox.Action.CLOSE],
          emphasizedAction: MessageBox.Action.OK,
          onClose: function (sAction) {
            if (sAction === MessageBox.Action.OK) {
              function existsInData(e) {
                return e.articleNo === oItem.articleNo;
              }
              const index = oArticles.findIndex(existsInData);
              oArticles.splice(index, 1);
              oModel.refresh();
              MessageToast.show("Item deleted");
            }
          },
        });
      },
      onExportPress: function () {
        var date = new Date();
        var oModel = this.getView().getModel("tableData");
        var oArticles = oModel.getProperty("/articles");
        console.log(oArticles);
        oArticles.forEach(function (item) {
          if (item.isGap === undefined) {
            item.isGap = false;
          }
          if (item.requestedQuantity > item.soh) {
            // item.requestedQuantity = item.soh;
            item.ableToFulfil = false;
          } else {
            item.ableToFulfil = true;
          }
        });

        MessageBox.confirm("Are you sure you want to export the list?", {
          actions: [MessageBox.Action.OK, MessageBox.Action.CLOSE],
          emphasizedAction: MessageBox.Action.OK,
          onClose: function (sAction) {
            if (sAction === MessageBox.Action.OK) {
              if (oModel.oData.articles.length > 0) {
                var oExport = new Export({
                  exportType: new exportCSV({
                    // for xls....
                    // fileExtension: "xls",
                    // separatorChar: "\t",
                    // charset: "utf-8",
                    // mimeType: "application/vnd.ms-excel",

                    // for CSV....
                    charset: "utf-8",
                    fileExtension: "csv",
                    separatorChar: ",",
                    mimeType: "application/csv",
                  }),
                  models: oModel,

                  rows: {
                    path: "/articles",
                  },
                  columns: [
                    {
                      name: "Aisle No.",
                      template: {
                        content: "{aisle}",
                      },
                    },
                    {
                      name: "Article No.",
                      template: {
                        content: "{articleNo}",
                      },
                    },
                    {
                      name: "Name",
                      template: {
                        content: "{name}",
                      },
                    },
                    {
                      name: "Qty",
                      template: {
                        content: "{qty}",
                      },
                    },
                    {
                      name: "Stock on hand",
                      template: {
                        content: "{soh}",
                      },
                    },
                    {
                      name: "Pres. stock",
                      template: {
                        content: "{presStock}",
                      },
                    },
                    {
                      name: "Requested quantity",
                      template: {
                        content: "{requestedQuantity}",
                      },
                    },
                    {
                      name: "Empty shelf?",
                      template: {
                        content: "{isGap}",
                      },
                    },
                    {
                      name: "Able to fulfil Requested Quantity?",
                      template: {
                        content: "{ableToFulfil}",
                      },
                    },
                  ],
                });
                oExport
                  .saveFile(`Gapbuster List ${date}`)
                  .catch(function (oError) {
                    sap.m.MessageToast.show(
                      "Generate is not possible because no model was set"
                    );
                    console.log(oError);
                  })
                  .then(function () {
                    oExport.destroy();
                  });
              } else {
                MessageToast.show("Cannot export empty list");
              }
            }
          },
        });
      },
      onNavBackOne: function () {
        var oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("list");
      },
    });
  }
);
