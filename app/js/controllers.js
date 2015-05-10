'use strict';

/* Controllers */
var app = angular.module('BeerControllers', []);

app.controller('BeerListCtrl', ['$scope', 'Beer', function($scope, Beer){
	$scope.beers = Beer.query();
	$scope.order = "name";
}]);

app.controller('BeerDetailCtrl', ['$scope', '$routeParams', "Beer", function($scope, $routeParams, Beer) {
	$scope.beer = Beer.get({beerId: $routeParams.beerId},function(beer) {
		$scope.mainImg = $scope.beer.img;
	});
    
    $scope.setImage = function(img) {
      $scope.mainImg = img;
    }
}]);