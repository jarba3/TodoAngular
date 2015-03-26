'use strict'


angular.module('todo', [])

.config(function($routeProvider) {
	$routeProvider.when('/todo', {
		templateUrl: 'template/todo.html',
		controller: 'todoCtrl'
	})
});