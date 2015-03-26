'use strict'

angular.module('aston', ['ngRoute', 'todo', 'blog'])

.config(function($routeProvider) {
	$routeProvider.when('/', {
		template: '<h1>{{ prenom }}</h1>',
		controller: function($scope){
			$scope.prenom = 'Izaya';
		}
	})

	.when('/items', {
		templateUrl: 'template/items.html',
		controller: 'myCtrl'
	})

	.when('/item/:id*', {
		template: '<h1>Item ID : {{ id }}</h1>',
		controller: function($scope, $routeParams){
			$scope.id = $routeParams.id;
		}
	})

	.otherwise({redirectTo: '/'});
});
