sap.ui.getCore().attachInit(function () {
    console.log("SAP UI5 is fully loaded!");

    sap.ui.require([
        "sap/ui/core/mvc/XMLView"
    ], function (XMLView) {
        "use strict";

        XMLView.create({
            viewName: "my.app.namespace.view.App"
        }).then(function (view) {
            view.placeAt("content");
            console.log("XML View placed!");
        });

    });
});
