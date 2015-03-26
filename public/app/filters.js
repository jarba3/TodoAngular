'use strict'


angular.module('aston')

.filter('truncate', function(){
	return function(str, length){
		length = length || str.length;
		return str.substr(0, length) + "...";
	};
})

.filter('showItem', function(){
	return function(item){
		var price = item.price.toString().replace('.', ',');
		return item.name + ' (' + price + ')';
	};
});