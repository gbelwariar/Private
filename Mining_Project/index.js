angular
		.module('myApp', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
		.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
			});
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'home/home.html',
					controller: 'HomeCtrl as homeCtrl'
				})
				.state('matrix', {
					url: '/matrix',
					templateUrl: 'matrix/matrix.html',
					controller: 'MatrixCtrl as matrixCtrl',
					params: {
						matrix: {}
					}					
				})				
		}]);