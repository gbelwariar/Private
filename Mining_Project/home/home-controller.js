function HomeCtrl($state) {		
		this.$onInit = (function() {
			this.matrix = {};
			this.brrParameters = {};		// Contains 'p', 'Cm', 'r'.
			this.bmcParameters = {};		// Contains 'Core'.
			this.commonParameters = {};		// Contains 'v', 'ro'.
			this.stateService_ = $state;
		}).bind(this);
}


HomeCtrl.prototype.initiateMatrixGeneration = function() {
	let brr = computeBRR(this.brrParameters, this.commonParameters);
	let bmc = computeBMC(this.bmcParameters, this.commonParameters);
	this.stateService_.go('matrix', {
		matrix: this.matrix,
		brr: brr,
		bmc: bmc
	});
};


function computeBRR(brrParameters, commonParameters) {
	return (brrParameters.p - brrParameters.Cm) *
			brrParameters.r * commonParameters.v * commonParameters.ro;
}


function computeBMC(bmcParameters, commonParameters) {
	return bmcParameters.Core * commonParameters.v * commonParameters.ro;
}


angular
		.module('myApp')
		.controller('HomeCtrl', ['$state', HomeCtrl]);
