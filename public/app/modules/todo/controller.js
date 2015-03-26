'use strict'

angular.module('todo')

.controller('todoCtrl', function($scope){
	$scope.todos = [];	
	$scope.addTodo = function(e){
		if(e.keyCode == 13 && $scope.task){
			$scope.todos.push({ text: $scope.task, done: false});
			$scope.task = "";
		}
	};
	$scope.remove = function($index){
		$scope.todos.splice($index, 1);
	};
	$scope.remaining = function(){
		var counter = 0;
		angular.forEach($scope.todos, function(value, key){
			if(value.done){
				counter++;
			}
		});
		return counter;
	};
});