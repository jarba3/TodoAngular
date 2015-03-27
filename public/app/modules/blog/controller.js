'use strict'

angular.module('blog')

.controller('blogCtrl', function($scope, $http){
	$http.get('/articles')
		.success(function(data){
			$scope.articles = data;
		});
})
.controller('addCtrl', function($scope, $http){
	$scope.save = function(form, article){
		$http.post('/articles', article)
			.success(function(data){
				console.log(data);
			});
	};
})
.controller('editCtrl', function($scope, $http, $routeParams){
	$scope.id = $routeParams.id;
	$http.get('/articles/'+$scope.id)
		.success(function(data){
			$scope.article = data;
		});
	$scope.update = function(form, article){
		$http.put('/articles/'+$scope.id, article);
	}
});
