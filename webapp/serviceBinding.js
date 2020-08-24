function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZENT_UI_DUMMY_PO_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}