'use strict'

angular.module('blog', [])

.config(function($routeProvider) {
	$routeProvider.when('/blog', {
		templateUrl: 'template/blog.html',
		controller: 'blogCtrl'
	})

	.when('/ajout-article', {
		templateUrl: 'template/add.html',
		controller: 'addCtrl'
	})

	.when('/editer-article/:id', {
		templateUrl: 'template/edit.html',
		controller: 'editCtrl'
	})
});
