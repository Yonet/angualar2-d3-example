angular.module('app')
	.controller('DashboardController', ['$scope', function($scope){
		$scope.graphData = [10,20,30,40,60];
		 $scope.data = [{value: 10}, {value:29},{value: 59}]
		$scope.addToData = function(data) {
			console.log('data is', data)
			$scope.graphData.push(data);
			$scope.accessor = function(){
				return function(d) {
					return d.value;
				}
			}
		};
	}]);