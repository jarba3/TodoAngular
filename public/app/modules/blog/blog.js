'use strict'

angular.module('blog', [])

.config(function($routeProvider) {
	$routeProvider.when('/blog', {
		templateUrl: 'template/blog.html',
		controller: 'blogCtrl'
	})

	.when('/blog/ajout-article', {
		templateUrl: 'template/add.html',
		controller: 'addCtrl'
	})

	.when('/blog/editer-article/:id', {
		templateUrl: 'template/edit.html',
		controller: 'editCtrl'
	})

	.when('/blog/article/:id', {
		templateUrl: 'template/show.html',
		controller: 'showCtrl'
	})
});
