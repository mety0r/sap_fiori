sap.ui.require([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("my.app.namespace.controller.App", {
        onInit: function () {
            var Odata = {
                recipient: {
                    name: "UI5"
                },
                greeting: "Hello UI5"
            };
            var OModel = new JSONModel(Odata);
            this.getView().setModel(OModel);

            
            OModel.attachPropertyChange(function (oEvent) {
                var oData = OModel.getData();
                oData.greeting = "Hello " + (oData.recipient.name || "");
                OModel.refresh(true);  
            });
        },

        onShowHello: function () {
            MessageToast.show("Hello there");
        }
    });
});
