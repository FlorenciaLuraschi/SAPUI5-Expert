sap.ui.define([
    "../localService/mockserver",
    "sap/m/MessageBox"
],
    /**
     * 
     * @param {typeof sap.m.MessageBox} MessageBox 
     */
    function (mockserver, MessageBox) {
        "use strict";

        var aMockServer = [];

        // initialize the mock server
        aMockServer.push(mockserver.init());

        Promise.all(aMockServer).catch(function (oError) {
            MessageBox.error(oError.message);
        }).finally(function () {
            // initialize the embedded component on the HTML page
            sap.ui.require(["sap/ui/core/ComponentSupport"]);
        });


    });