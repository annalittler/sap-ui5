sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/ui/core/UIComponent",
    "sap/ui/export/library",
    "sap/ui/export/Spreadsheet",
    "sap/ui/core/util/Export",
    "sap/ui/core/util/ExportTypeCSV",
    "sap/m/GroupHeaderListItem",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (
    Controller,
    MessageToast,
    MessageBox,
    JSONModel,
    Fragment,
    UIComponent,
    exportLibrary,
    Spreadsheet,
    Export,
    exportCSV,
    GroupHeaderListItem,
    Filter,
    FilterOperator
  ) {
    "use strict";

    // var EdmType = exportLibrary.EdmType;

    return Controller.extend("sap.ui.demo.walkthrough.controller.List", {
      onInit: async function () {
        this.startedScanning = false;
        console.log("scanning started?", this.startedScanning);

        // await json.loadData("../Data.json", false);
        // var mockData = json.oData;
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
          // console.log(oData);

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
              f;
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
                    oModel.refresh();
                  }
                  oModel.refresh();
                }
              });
            });
        }
      },

      onShowImages: function (e) {
        var oModel = this.getView().getModel("showImgs");
        // console.log(oModel);
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

      onGroupByAisle: function (e) {
        console.log("hi");
        var oModel = this.getView().getModel("groupByAisle");

        // console.log(oModel);
        var state = e.getSource().getState();
        if (state === true) {
          var groupByAisle = {
            status: true,
          };
          oModel.oData = groupByAisle;
          oModel.refresh();
        }

        if (state === false) {
          var groupByAisle = {
            status: false,
          };
          oModel.oData = groupByAisle;
          oModel.refresh();
        }
        console.log(oModel.oData);
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

      onAddItemPopup: function () {
        var oView = this.getView();
        if (!this.byId("addItemBox")) {
          Fragment.load({
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.view.fragments.AddItem",
            controller: this,
          }).then(function (oDialog) {
            console.log(oDialog);
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          this.byId("addItemBox").open();
        }
      },

      onCloseSettings: function () {
        this.byId("addItemBox").close();
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

      onAddItem: function () {
        var input = parseInt(this.getView().byId("searchInputVal").getValue());
        var oModel = this.getView().getModel("tableData");
        var oData = oModel.getData();
        var oArticles = oData.articles;

        // oData.findIndex(items);
        var index = oArticles.findIndex((items) => items.articleNo == input);
        console.log(index);
        console.log(oArticles[0].barcode);
        if (oArticles.findIndex((item) => item.articleNo == input) == -1) {
          console.log("hi");
          if (mockData.find((e) => e.articleNo === input)) {
            function existsInData(e) {
              return e.articleNo === input;
            }
            const index = mockData.findIndex(existsInData);
            oData.articles.unshift(mockData[index]);
            oModel.refresh();
          } else {
            MessageToast.show("Product not found");
          }
        } else {
          MessageToast.show("Item already in list");
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
      onOpenScan: function (e) {
        var oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("scan");
      },
      onDeleteMenu: function () {
        var list = this.byId("listItems");
        var listLastMode = list._sLastMode;
        console.log(listLastMode);
        if (listLastMode == "Delete") {
          list.setMode("MultiSelect");
        } else {
          list.setMode("Delete");
        }
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
      onFilterItems: function (oEvent) {
        // build filter array
        var aFilter = [];
        var sQuery = oEvent.getParameter("query");
        if (sQuery) {
          aFilter.push(new Filter("name", FilterOperator.Contains, sQuery));
        }

        // filter binding
        var oList = this.byId("listItems");
        var oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
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
    });
  }
);
