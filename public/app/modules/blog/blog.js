'use strict'

angular.module('blog', [])

.config(function($routeProvider) {
	$routeProvider.when('/blog', {
		templateUrl: 'template/blog.html',
		controller: 'blogCtrl'
	})

	.when('/ajout-article', {
		templateUrl: 'template/article-form.html',
		controller: 'addCtrl'
	})
});
