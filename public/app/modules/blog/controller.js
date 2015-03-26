'use strict'

angular.module('blog')

.controller('blogCtrl', function($scope){
	$scope.articles = [
		{
			title: 'Mon article',
			teaser: "Teaser de l'article",
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			email: 'monemail@truc.com'
		},
		{
			title: 'Mon deuxieme article',
			teaser: 'Teaser de deuxieme article',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			email: 'deuxiemeemail@blog.com'
		}
	];
})
.controller('addCtrl', function($scope){
	$scope.save = function(form, article){
		console.log(article);
	};
});
