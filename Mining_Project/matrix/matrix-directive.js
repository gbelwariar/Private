angular
				.module('myApp')
				.directive('matrix', ['constants', function(constants) {
					return {
						controller: 'MatrixCtrl',
						controllerAs: 'matrixCtrl',
						link: function(scope, elem) {
							scope.elem = elem;							
							scope.analyze = function() {
								let matrixRows = +this.matrixCtrl.matrix.numberOfRows;
								let matrixCols = +this.matrixCtrl.matrix.numberOfCols;
								let slidingWindowRows = +this.matrixCtrl.slidingWindow.numberOfRows;
								let slidingWindowCols = +this.matrixCtrl.slidingWindow.numberOfCols;
								this.matrixCtrl.windowSums = [];
								if ((slidingWindowRows > matrixRows) ||
											(slidingWindowCols > matrixCols)) {
									alert('Dimenstion of window exceeds that of the original matrix!');
								} else {
									let matrix = new Array(matrixRows);
									for (let i=0; i<matrixRows; i++) {
										matrix[i] = new Array(matrixCols);
									}
									for (let i=0; i<matrixRows; i++) {
										for (let j=0; j<matrixCols; j++) {
											matrix[i][j] = +this.elem.find("cell")[j+i*matrixCols].innerText;
										}
									}
									/**
									 *  An array of objects with the given schema -
									 *		{
									 *			val: ..., // The sum of all the values in the current window.
									 *			top: ..., // The 'top' pixel value of the top-left-most corner of the current window.
									 *			left: ... // The 'left' pixel value of the top-left-most corner of the current window.
									 *		}
									 */
									this.slidingWindowObjects = [];
									let maxSumWindow = {
										val: -Number.MAX_VALUE
									};
									for (let i=0; i<matrixRows-slidingWindowRows+1; i++) {
										for (let j=0; j<matrixCols-slidingWindowCols+1; j++) {
											let sum = 0;
											for (let innerI=i; innerI<i+slidingWindowRows; innerI++) {
												for (let innerJ=j; innerJ<j+slidingWindowCols; innerJ++) {
													sum += matrix[innerI][innerJ];
												}
											}
											if (sum > maxSumWindow.val) {
												maxSumWindow.val = sum;
												maxSumWindow.left = constants.firstCellLeft + j*constants.horizontalDistanceBetweenTwoAdjacentCells - 10 + 'px';
												maxSumWindow.top = constants.firstCellTop + i*constants.verticalDistanceBetweenTwoAdjacentCells - 10 + 'px';
											}
											this.slidingWindowObjects.push({
												val: sum,
												left: constants.firstCellLeft + j*constants.horizontalDistanceBetweenTwoAdjacentCells - 10 + 'px',
												top: constants.firstCellTop + i*constants.verticalDistanceBetweenTwoAdjacentCells - 10 + 'px'
											});
										}
									}
									this.stopSlidingWindow();
									this.startSlidingWindow(maxSumWindow);
								}								
							};
						}
					};
				}]);
