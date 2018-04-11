function precisionRound(number, precision) {
	let factor = Math.pow(10, precision);
	return Math.round(number * factor) / factor;
}


// Uncomment the 'cellVal' parameter to receive 'cellCtrl.cellVal' from 'CellCtrl'.
function ModalInstanceCtrl($uibModalInstance/**, cellVal*/) {
	
	this.$onInit = function() {
		this.uibModalInstanceService_ = $uibModalInstance;
		this.inputObj = {};
	}
}


ModalInstanceCtrl.prototype.ok = function() {
	let newCellVal = precisionRound(+this.inputObj.x1, 3) + precisionRound(+this.inputObj.x2, 3);
	this.uibModalInstanceService_.close(newCellVal);
};


ModalInstanceCtrl.prototype.cancel = function() {	
	this.uibModalInstanceService_.dismiss('cancel');
};


angular
				.module('myApp')
				.controller('ModalInstanceCtrl', ModalInstanceCtrl);
