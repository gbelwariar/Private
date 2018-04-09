function MatrixCtrl($stateParams) {
	this.valToShowInsideCard;
	
	this.$onInit = function() {
		/** 
		 *  Can take the following values - 
		 *  	 i) 'NOT_STARTED_YET'.
		 *    ii) 'MOVING'.
		 *   iii) 'HALTED'.
		 */
		this.slidingWindowStatus = 'NOT_STARTED_YET';
		this.slidingWindow = {};
		this.matrix = $stateParams.matrix;
		this.windowSums = [];
		this.countContainer =
				getCountContainer($stateParams.matrix.numberOfRows, $stateParams.matrix.numberOfCols);
	};
}


function getCountContainer(rows, cols) {
	let countContainer = {};
	for (let i=0; i<rows*cols; i++) {
		countContainer[i] = i;
	}
	return countContainer;
}


angular
				.module('myApp')
				.controller('MatrixCtrl', ['$stateParams', MatrixCtrl]);
