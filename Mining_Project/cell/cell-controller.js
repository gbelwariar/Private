function CellCtrl($uibModal) {
	this.brr;
	this.bmc;
	this.$onInit = (function() {
		this.cellVal = 0;
		this.uibModalService_ = $uibModal;
	}).bind(this); 	
}


CellCtrl.prototype.open = function () {
	let vm = this;
	let modalInstance = this.uibModalService_.open({
		templateUrl: 'cell/modal/modal.html',
		controller: 'ModalInstanceCtrl',
		controllerAs: 'modalCtrl',
		resolve: {
			brr: function () {
				return vm.brr;
			},
			bmc: function() {
				return vm.bmc;
			}
		}
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
