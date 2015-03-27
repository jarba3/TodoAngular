'use strict'

angular.module('blog')

.controller('blogCtrl', function($scope, articleService){
	articleService.getArticles().then(function(data){
		$scope.articles = data;
	});
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
	articleService.putArticle($scope.id).then(function() {
		$location.path('/blog');
	});
});
