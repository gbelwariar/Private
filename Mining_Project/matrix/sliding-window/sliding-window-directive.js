angular
				.module('myApp')				
				.directive('slidingWindow', ['$interval', 'constants', function($interval, constants) {
					return {
						scope: false,
						link: function(scope, elem) {
							scope.startSlidingWindow = function(maxSumWindow) {
								let index = 0;
								let windowWidth = 
										(+this.matrixCtrl.slidingWindow.numberOfCols *
												constants.horizontalDistanceBetweenTwoAdjacentCells) + 10 + 'px';
								let windowHeight =
										(+this.matrixCtrl.slidingWindow.numberOfRows *
												constants.horizontalDistanceBetweenTwoAdjacentCells) + 10 + 'px';
								let moveWindow = (function() {
									if (index  === this.slidingWindowObjects.length) {
										this.matrixCtrl.valToShowInsideCard = maxSumWindow.val;
										this.matrixCtrl.slidingWindowStatus = 'HALTED';
										$interval.cancel(this.movingWindowIntervalPromise);		
										this.movingWindowIntervalPromise = null;
										elem.css({
											border: '7px solid blue',
											top: maxSumWindow.top,
											left: maxSumWindow.left
										});
									} else {
										this.matrixCtrl.valToShowInsideCard = this.slidingWindowObjects[index].val;
										if (index === 0) {
											this.matrixCtrl.slidingWindowStatus = 'MOVING';
											elem.css({
												position: 'absolute',
												border: '7px solid red',
												cursor: 'pointer',
												display: 'block',
												width: windowWidth,
												height: windowHeight
											});		
										}  
										let that = this;
										elem.css({
											top: that.slidingWindowObjects[index].top,
											left: that.slidingWindowObjects[index].left
										});
										index++;																				
									}
								}).bind(this);
								this.movingWindowIntervalPromise = $interval(moveWindow, 1500);
							};
							scope.stopSlidingWindow = function() {
								if (this.movingWindowIntervalPromise !== undefined && 
										this.movingWindowIntervalPromise !== null) {
									$interval.cancel(this.movingWindowIntervalPromise);									
								}
							};
						}
					};
				}]);