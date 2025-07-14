sap.ui.define([
    "logali/sapui5n1/model/InvoicesFormatter",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (InvoicesFormatter, ResourceModel) {
        "use strict";

        QUnit.module("Qnvoices Status", {
            beforeEach: function () {
                this._oResourceModel = new ResourceModel({
                    bundleUrl: sap.ui.require.toUrl("logali/sapui5n1") + "i18n/i18n.properties"
                });
            },
            afterEach: function () {
                this._oResourceModel.destroy();
            }
        });

        QUnit.test("Should return the Invoices status", function (assert) {

            let oModel = this.stub();
            oModel.withArgs("i18n").returns(this._oResourceModel);

            let oViewStub = {
                getModel : oModel
            };
            let oControllerStub = {
                getView : this.stub().returns(oViewStub)
            };

            let fnIsolatedFormatter = InvoicesFormatter.invoicesStatus.bind(oControllerStub);
                   
            // Assert
            assert.strictEqual(fnIsolatedFormatter("A"), "New", "The invoices status for A is correct");
            assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The invoices status Status for B is correct");
            assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The invoices status for C is correct");
            
        });
    });