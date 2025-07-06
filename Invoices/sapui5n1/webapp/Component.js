sap.ui.define([
    "sap/ui/core/UIComponent",
    "logali/sapui5n1/model/Models"
], 
/**
 * @param {typeof sap.ui.core.UIComponent} UIComponent
 * 
 */
function (UIComponent, Models) {
    return UIComponent.extend("logali.sapui5n1.Component", {
        metadata : {
           manifest : "json",            
        },
        init : function(){
            //call the init function of the parent
            UIComponent.prototype.init.apply(this,arguments);

            // set data model on the view
            this.setModel(Models.createRecipient());
            
        }
    });
});