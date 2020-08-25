sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function (Controller, JSONModel, MessageToast, MessageBox) {
	"use strict";

	return Controller.extend("FullScreenApp.controller.View1", {

		onInit: function () {

			this._oView = this.getView();

			var oViewModel = new JSONModel({
				PoNumber: "",
				Lifnr: "",
				Waers: "",
				Bukrs: ""
			});

			this._oView.setModel(oViewModel, "viewModel");
			this._oTable = this._oView.byId("table0");

		},

		onAddPurchaseOrder: function () {
			debugger;
			var oModel = this._oView.getModel(),
				sPath = "/PurchaseOrderSet",
				oData = {},
				mParameters = {},
				bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;

			oData.Ponumber = this._oView.getModel("viewModel").getProperty("/PoNumber");
			oData.Lifnr = this._oView.getModel("viewModel").getProperty("/Lifnr");
			oData.Waers = this._oView.getModel("viewModel").getProperty("/Waers");
			oData.Bukrs = this._oView.getModel("viewModel").getProperty("/Bukrs");
			
			
			mParameters.success = function (oData2, oResponse) {

				var oBinding = this._oTable.getBinding("items");
				oBinding.filter([]);

				MessageBox.success(
					"Kayıt Başarılı......", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);
			}.bind(this);

			mParameters.error = function (oError) {

				MessageBox.error(
					"Kayıt Başarısız......Gürhan ekledi :))", {
						styleClass: bCompact ? "sapUiSizeCompact" : ""
					}
				);
			};

			oModel.create(sPath, oData, mParameters);

		}

		// onDeletePurchaseOrder: function () {
		// 	debugger;
		// 	var oModel = this._oView.getModel(),
		// 		sPath = "/PurchaseOrderSet",
		// 		oData = {},
		// 		mParameters = {},
		// 		bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;

		// 	oData.Ponumber = this._oView.getModel("viewModel").getProperty("/PoNumber");
		// 	oData.Lifnr = this._oView.getModel("viewModel").getProperty("/Lifnr");
		// 	oData.Waers = this._oView.getModel("viewModel").getProperty("/Waers");
		// 	oData.Bukrs = this._oView.getModel("viewModel").getProperty("/Bukrs");
	

		// 	mParameters.success = function (oData2, oResponse) {

		// 		var oBinding = this._oTable.getBinding("items");
		// 		oBinding.filter([]);

		// 		MessageBox.success(
		// 			"Silme İşlemi Başarılı........", {
		// 				styleClass: bCompact ? "sapUiSizeCompact" : ""
		// 			}
		// 		);
		// 	}.bind(this);

		// 	mParameters.error = function (oError) {

		// 		MessageBox.error(
		// 			"Silme İşlemi Başarısız.......", {
		// 				styleClass: bCompact ? "sapUiSizeCompact" : ""
		// 			}
		// 		);
		// 	};

		// 	oModel.delete(sPath, oData, mParameters);

		// }

	});

});