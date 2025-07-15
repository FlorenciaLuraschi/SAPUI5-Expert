sap.ui.define([
    "sap/ui/core/UIComponent",
    "logali/sapui5n1/model/Models",
    "./controller/HelloDialog"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * 
     */
    function (UIComponent, Models, HelloDialog) {
        return UIComponent.extend("logali.sapui5n1.Component", {
            metadata: {
                manifest: "json",
            },
            init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view
                this.setModel(Models.createRecipient());

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
            }
        });
    });