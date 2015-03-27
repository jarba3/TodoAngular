'use strict'

angular.module('blog')

.factory('articleService', function($http){
	return {

		getArticles: function(){
			return $http.get('/articles').then(
				function(response){
					return response.data;
				});
		},
		getArticle: function(id){
			return $http.get('/articles/'+id).then(
				function(response){
					return response.data;
				});
		},
		postArticle: function(article){
			return $http.post('/articles', article);
		},
		putArticle: function(id, article){
			return $http.put('/articles/'+id, article);
		},
		deleteArticle: function(id){
			return $http.delete('/articles/'+id);
		}
	};
});