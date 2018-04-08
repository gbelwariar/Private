function ModalInstanceCtrl($uibModalInstance) {
	
	this.$onInit = function() {
		this.uibModalInstanceService_ = $uibModalInstance;
		this.inputObj = {};
	}
}


ModalInstanceCtrl.prototype.ok = function() {
	let newCellVal = (+this.inputObj.x1) + (+this.inputObj.x2);
	this.uibModalInstanceService_.close(newCellVal);
};


ModalInstanceCtrl.prototype.cancel = function() {	
	this.uibModalInstanceService_.dismiss('cancel');
};


angular
				.module('myApp')
				.controller('ModalInstanceCtrl', ModalInstanceCtrl);