function CellCtrl($uibModal) {
	
	this.$onInit = (function() {
		this.cellVal = 0;
		this.uibModalService_ = $uibModal;
	}).bind(this); 	
}


CellCtrl.prototype.open = function () {
	/** 
	 *  Uncomment the below line to send 'cellVal' to the modal dialog.
	 *		let vm = this;
	 */
	let modalInstance = this.uibModalService_.open({
		templateUrl: 'cell/modal/modal.html',
		controller: 'ModalInstanceCtrl',
		controllerAs: 'modalCtrl',
		/**
		 * Uncomment the below line to send 'cellVal' to the modal dialog.
		 *   resolve: {
		 *		 cellVal: function () {
		 *			 return vm.cellVal;
		 *		 }
		 *	 }
		 */
	});
	modalInstance.result.then((function (cellVal) {
		if (!isNaN(cellVal) && cellVal !== undefined) {
			this.cellVal = cellVal;			
		}
	}).bind(this), function () {
		console.log('Modal dismissed at: ' + new Date());
	});
};


angular
				.module('myApp')
				.controller('CellCtrl', ['$uibModal', CellCtrl])
