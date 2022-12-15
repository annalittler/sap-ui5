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
        var oModel = sap.ui.getCore().getModel("tableData");
        var oData = oModel.getData();

        this.startedScanning = false;
        console.log("scanning started?", this.startedScanning);
        var scanner = this.byId("scandit-barcode-picker1");

        if (this.startedScanning === false) {
          this.startedScanning = true;
          var oScannedItems = [];
          ScanditSDK.configure(
            // API KEY GOES HERE
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
              var oAllItems = this.getView()
                .getModel("allData")
                .getData().articles;
              // barcodePicker is ready here, show a message every time a barcode is scanned
              barcodePicker.on("scan", (scanResult) => {
                var oScannedBarcode = {};
                var item = parseInt(scanResult.barcodes[0].data);
                var oNewItem = [];
                oScannedBarcode.barcode = item;
                if (
                  oScannedItems.findIndex((obj) => obj.barcode == item) === -1
                ) {
                  oScannedItems.unshift(oScannedBarcode);
                  if (oAllItems.find((e) => e.barcode === item)) {
                    function existsInData(e) {
                      return e.barcode === item;
                    }

                    const index = oAllItems.findIndex(existsInData);

                    oNewItem.push(oAllItems[index]);
                    const oCurrentData = oModel.getProperty("/articles");
                    const oNewData = oNewItem.concat(oCurrentData);
                    oModel.setProperty("/articles", oNewData);
                    var successTone = new Audio("./resources/success_tone.mp3");
                    successTone.loop = false;
                    successTone.play();
                    var oScannedArticle = oModel.getData().articles[0];
                    if (oModel.getData().emptyShelvesAutoTag.status === true) {
                      oScannedArticle.isGap = true;
                    }
                  }
                  if (oData.articles.length >= 10) {
                    MessageBox.warning(
                      "Your list contains 10 items, please export soon to avoid data loss."
                    );
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
      },
      onNavBack: function () {
        var oView = this.getView("Scan");
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
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();

        var oItem = e
          .getParameter("listItem")
          .getBindingContext("tableData")
          .getObject();
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
      onExit: function () {},
    });
  }
);
