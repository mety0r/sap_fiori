sap.ui.require([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
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

            // Set i18n model on view
            var i18nModel = new ResourceModel({
                bundleName: "my.app.namespace.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.getView().setModel(i18nModel, "i18n");  

            OModel.attachPropertyChange(function (oEvent) {
                var oData = OModel.getData();
                oData.greeting = "Hello " + (oData.recipient.name || "");
                OModel.refresh(true);
            });
        },

        onShowHello: function () {
            // Read message from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);  

            MessageToast.show(sMsg);
        }
    });
});
