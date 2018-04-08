function HomeCtrl($state) {		
		this.$onInit = (function() {
			this.matrix = {};
			this.stateService_ = $state;
		}).bind(this);
}


HomeCtrl.prototype.initiateMatrixGeneration = function() {
	this.stateService_.go('matrix', {matrix: this.matrix});
};


angular
		.module('myApp')
		.controller('HomeCtrl', ['$state', HomeCtrl]);