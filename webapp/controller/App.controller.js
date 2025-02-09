sap.ui.require([
    "sap/ui/core/mvc/Controller"
], function (Controller){
    "use strict"
    return Controller.extend("my.app.namespace.controller.App",{
        onShowHello: function () {
            //show a vanilla alert
            alert("Hello There!")
        }

    });
});