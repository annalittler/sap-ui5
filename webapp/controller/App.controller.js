sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
  ],
  function (Controller, MessageToast, MessageBox, JSONModel, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onInit: function () {
        this.startedScanning = false;
        console.log(this.startedScanning);
      },
      onStartScan: function () {
        var scanner = this.byId("scandit-barcode-picker");
        var closeBtn = this.byId("closeBtn");
        var scanBtn = this.byId("scanBtn");
        scanBtn.setEnabled(false);
        closeBtn.setVisible(true);
        scanner.setVisible(true);

        if (this.startedScanning === false) {
          this.startedScanning = true;
          var oScannedItems = [];
          var oModel = this.getView().getModel("tableData");
          var oData = oModel.getData();

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
                  this.getView().createId("scandit-barcode-picker")
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
                  oScannedItems.push(oScannedBarcode);
                  if (mockData.find((e) => e.barcode === item)) {
                    function existsInData(e) {
                      return e.barcode === item;
                    }
                    const index = mockData.findIndex(existsInData);
                    oData.articles.push(mockData[index]);
                    oModel.refresh();
                  }

                  oModel.refresh();
                }
              });
            });
        }
      },
      onSettingsPopup: function () {
        var oView = this.getView();
        if (!this.byId("settingsBox")) {
          console.log("hello");
          Fragment.load({
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.view.fragments.Settings",
            controller: this,
          }).then(function (oDialog) {
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          console.log("hellooooo");
          this.byId("settingsBox").open();
        }
      },

      onCloseSettings: function () {
        this.byId("settingsBox").close();
      },

      onStopScan: function () {
        console.log(true);
        var closeBtn = this.byId("closeBtn");
        var scanBtn = this.byId("scanBtn");
        var scanner = this.byId("scandit-barcode-picker");
        this.byId("scandit-barcode-picker").setVisible(false);
        closeBtn.setVisible(false);
        scanBtn.setVisible(true);
        scanBtn.setEnabled(true);
        scanner.setVisible(false);
      },

      onShowImages: function (e) {
        var oModel = this.getView().getModel("showImgs");
        console.log(oModel);
        var state = e.getSource().getState();

        if (state === true) {
          var showImgs = {
            status: true,
          };
          oModel.oData = showImgs;
          oModel.refresh();
        }

        if (state === false) {
          var showImgs = {
            status: false,
          };
          oModel.oData = showImgs;
          oModel.refresh();
        }
      },

      onAddItem: function () {
        var input = parseInt(this.getView().byId("searchInputVal").getValue());
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();

        if (mockData.find((e) => e.articleNo === input)) {
          function existsInData(e) {
            return e.articleNo === input;
          }

          const index = mockData.findIndex(existsInData);
          oData.articles.push(mockData[index]);
          oModel.refresh();
        } else {
          MessageToast.show("Product not found");
        }
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

      onDeleteItem: function (e) {
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();

        var oItem = e
          .getParameter("listItem")
          .getBindingContext("tableData")
          .getObject();
        console.log(oItem);
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
    });
  }
);
