angular
				.module('myApp')
				.filter('floor', function() {
					return function(val) {
						return Math.floor(val);
					}
				});