sap.ui.require([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast){
    "use strict"
    return Controller.extend("my.app.namespace.controller.App",{
        onShowHello: function () {
            //show a vanilla alert
            MessageToast.show("Hello there")
        }

    });
});