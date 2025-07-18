sap.ui.define([
    "sap/ui/core/UIComponent",
    "logali/sapui5n1/model/Models",
    "./controller/HelloDialog",
    "sap/ui/Device"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.Device} Device
     */
    function (UIComponent, Models, HelloDialog, Device) {
        return UIComponent.extend("logali.sapui5n1.Component", {
            metadata: {
                manifest: "json",
            },
            init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view
                this.setModel(Models.createRecipient());

                //set the device model
                this.setModel(Models.createDeviceModel(), "device");


                this._helloDialog = new HelloDialog(this.getRootControl());

                //create the view based on the url/hash (para el enrutamiento)
                this.getRouter().initialize();

            },

            exit: function () {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function () {
                this._helloDialog.open();
            },

            getContentDesintyClass: function (){
                if (!Device.support.touch){
                    this._sContentDensityClass = "sapUiSizeCompact";
                } else {
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
                return this._sContentDensityClass;
            }
        });
    });