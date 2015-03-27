'use strict'

angular.module('blog')

.controller('blogCtrl', function($scope, articleService){
	articleService.getArticles().then(function(data){
		$scope.articles = data;
	});
	$scope.delete = function(id) {
		articleService.deleteArticle(id).then(function(){
			articleService.getArticles().then(function(data){
				$scope.articles = data;
			});
		});
	}
})
.controller('addCtrl', function($scope, $location, articleService){
	$scope.save = function(form, article){
		articleService.postArticle(article).then(function(){
			$location.path('/blog');
		});
	};
})
.controller('editCtrl', function($scope, $routeParams, $location, articleService){
	$scope.id = $routeParams.id;
	articleService.getArticle($scope.id).then(function(data){
		$scope.article = data;
	});
	$scope.save = function (id) {
		articleService.putArticle($scope.id, $scope.article).then(function() {
			$location.path('/blog');
		});
	};
})
.controller('showCtrl', function($scope, $routeParams, articleService){
	$scope.id = $routeParams.id;
	articleService.getArticle($scope.id).then(function(data){
		$scope.article = data;
	})
});
