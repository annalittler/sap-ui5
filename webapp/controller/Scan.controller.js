sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/export/Spreadsheet",
    "sap/ui/core/util/Export",
    "sap/ui/core/util/ExportTypeCSV",
  ],
  function (
    Controller,
    UIComponent,
    History,
    MessageBox,
    JSONModel,
    MessageToast,
    Spreadsheet,
    Export,
    exportCSV
  ) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.Scan", {
      onInit: async function () {
        // console.log(this.getView("List").getModel());
        var oModel = sap.ui.getCore().getModel("tableData");
        var oData = oModel.getData();

        // oModel.setSizeLimit(2);
        // oModel.setData(oData.articles);

        // oModel.iSizeLimit = 2;
        // console.log(oModel);
        // oModelThreeItems.setSizeLimit(3);
        // console.log(oModelThreeItems.oData);
        // console.log(oData);
        this.startedScanning = false;
        console.log("scanning started?", this.startedScanning);
        var scanner = this.byId("scandit-barcode-picker1");

        if (this.startedScanning === false) {
          this.startedScanning = true;
          var oScannedItems = [];

          ScanditSDK.configure(
            "AeUi1GO8QVCLQNsakx9oKmAH8IrQG9AmeWtsE+tNIEiresInMWGlkKgl6E7VYtnzlUu7bctPsTKOYGdgeVS0grtHLoL2Sfksjw1W7ER0ZTfRdGo+a3Rt1p0Z3abZOunN1CykPI44zjwq/CNmFimQxgaubAj5Vn/RuJdbFyuQQEthlnNgDYQmrHOH02p5luFLvnFpnmVjtnJI+/+MnHFg7Mbyaj9uPqOxuApRhPkGJQOmWOw3EAIDDUv3EicW+0L+Dxe3FYebkYfcmlkuhuI7KF+bezTYCwStuwYGINtr3+AKlqKstFFoSqroA71EZw32tfr8FDfr0YrGeZD1UoPK6qR7Gz0RVWHjtVYs2cZqsYPp8pXg7wC0Rs5GoF7kA9V/7gB5Prla1SwUEimHpqg/IPmOjnZjR3WFjq9JCFilbZ2ljY3yv3kbZ9wxA93HqYuYEUm5EfQnjkDq+VETJMzcUyl8MrIzDcoMuKjaDPSlew0hbI0uzJY8MRRpxdrxG0zStKDj2G7bzynd8H9AOft0+fPw5Tgb2/LmJc87AuwAlnPVSBMhDpoBDCMWLVPE1rB+Idn0oHkzKbMfvmm56BLRNLQocQKj3JY4fuKD5hHsmnQy0sXxlWjAF0ospJCvbW9KbWPWALnMDZ/ZE050vY4ZNeXOHULN2joOxxQbG/Y6CXJKpJm4dbUEUuSPEs5Ufn2e3b4ZPjLrrHAm1geZ40BNWtdNkuV+rOxLCC4XbbWLcyhSy7QtZu1x3BpSMyHqfHQWne+GgMpBbNPKvgJHf15jA6qBI0zDcbP6/MkBuhD4ASU2+UAYm7DK",
            {
              engineLocation:
                "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
            }
          )
            .then(() => {
              return ScanditSDK.BarcodePicker.create(
                document.getElementById(
                  this.getView().createId("scandit-barcode-picker1")
                ),
                {
                  // enable some common symbologies
                  scanSettings: new ScanditSDK.ScanSettings({
                    enabledSymbologies: ["ean8", "ean13", "upca", "upce"],
                  }),
                }
              );
            })
            .then((barcodePicker) => {
              // barcodePicker is ready here, show a message every time a barcode is scanned
              barcodePicker.on("scan", (scanResult) => {
                var oScannedBarcode = {};
                var item = parseInt(scanResult.barcodes[0].data);
                oScannedBarcode.barcode = item;
                if (
                  oScannedItems.findIndex((obj) => obj.barcode == item) === -1
                ) {
                  oScannedItems.unshift(oScannedBarcode);
                  if (mockData.find((e) => e.barcode === item)) {
                    function existsInData(e) {
                      return e.barcode === item;
                    }
                    const index = mockData.findIndex(existsInData);
                    oData.articles.unshift(mockData[index]);
                    // oModel.refresh();
                  }
                  if (oData.articles.length >= 10) {
                    MessageBox.warning(
                      "Your list contains 10 items, please export soon to avoid data loss."
                    );
                    // console.log("time to save");
                  }
                  oModel.refresh();
                }
              });
            });
        }
      },
      onLeaveScan: function () {
        var oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("list");
        var oView = this.getView("Scan");
        console.log(oView);
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
      onDeleteItem: function (e) {
        var arr = [];

        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();

        var oItem = e
          .getParameter("listItem")
          .getBindingContext("tableData")
          .getObject();
        // console.log(oItem);
        oModel.refresh();

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
      onClickItem: function (e) {
        var oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("detail", {
          detailPath: window.encodeURIComponent(
            e.getSource().getBindingContext("tableData").getPath().substr(1)
          ),
        });
      },
      onExportPress: function () {
        // var time = getTime();
        var date = new Date();
        // getting model into oModel variable.
        var oModel = this.getView().getModel("tableData");

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
                  ],
                });
                oExport
                  .saveFile(`Gapbuster List ${date}`)
                  .catch(function (oError) {
                    sap.m.MessageToast.show(
                      "Generate is not possible beause no model was set"
                    );
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
      onDeleteList: function () {
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        MessageBox.confirm("Are you sure you want to delete the list?", {
          actions: [MessageBox.Action.OK, MessageBox.Action.CLOSE],
          emphasizedAction: MessageBox.Action.OK,
          onClose: function (sAction) {
            if (sAction === MessageBox.Action.OK) {
              oData.articles = [];
              oModel.refresh();
              MessageToast.show("List deleted");
            }
          },
        });
      },
    });
  }
);
