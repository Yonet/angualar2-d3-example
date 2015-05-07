angular.module('app')
	.controller('DashboardController', ['$scope', function($scope){
		$scope.graphData = [10,20,30,40,60];
		$scope.addToData = function(data) {
			console.log('data is', data)
			$scope.graphData.push(data);
		};
	}]);