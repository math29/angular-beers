'use strict';

/* Controllers */
var app = angular.module('BeerControllers', []);

app.controller('BeerListCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('beers/beers.json').success(function(data, status, headers, config) {
			$scope.beers = data;
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	$scope.order = "name";
}]);

app.controller('BeerDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.beerId = $routeParams.beerId;
}])