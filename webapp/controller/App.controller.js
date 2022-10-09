// sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
//   "use strict";
//   return (
//     Controller.extend("sap.ui.demo.walkthrough.App"),
//     {
//       incrementBy1: function () {
//         //     // console.log("hi");
//         //     let myTextElem = this.getView().byId("counter");
//         //     let myNum = parseInt(myTextElem.getText());
//         //     let myNewNum = myNum + 1;
//         //     myTextElem.setText(myNewNum);
//         //   },
//         alert("hello");
//       },
//     }
//   );
// });

sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("sap.ui.demo.walkthrough.App", {
    incrementBy1: function () {
      // Show a native or vanailla JS alert
      let myTextElem = this.getView().byId("counter");
      let myNum = parseInt(myTextElem.getText());
      let myNewNum = myNum + 1;
      myTextElem.setText(myNewNum);
    },
  });
});
