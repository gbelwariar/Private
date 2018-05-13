angular
				.module('myApp')
				.directive('cell', ['constants', function(constants) {
					return {
						controller: 'CellCtrl',
						controllerAs: 'cellCtrl',
						templateUrl: 'cell/cell.html',
						link: function(scope, elem, attr) {
							scope.cellCtrl.brr = attr.brr;
							scope.cellCtrl.bmc = attr.bmc;
							elem.css({
								position: "absolute",
								left: constants.firstCellLeft + attr.colindex*constants.horizontalDistanceBetweenTwoAdjacentCells + "px",	/* Multiplier = width + 8 */
								top: constants.firstCellTop + attr.rowindex*constants.verticalDistanceBetweenTwoAdjacentCells + "px"   /* Multiplier = height + 8 */
							});
						}
					};
				}]);
