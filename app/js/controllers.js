'use strict';

/* Controllers */
var app = angular.module('AngularBeer', []);

app.controller('BeerListCtrl', ['$scope', '$http', function($scope, $http){
	// $scope.beers = [
	//   {
	//     "alcohol": 6.8,
	//     "name": "Affligem Blond",
	//     "description": "Affligem Blonde, the classic clear blonde abbey ale, with a gentle roundness and 6.8% alcohol. Low on bitterness, it is eminently drinkable.",
	//   	"age": 15
	//   },
	//   {
	//     "alcohol": 8.5,
	//     "name": "Affligem Tripel",
	//     "description": "The king of the abbey beers. It is amber-gold and pours with a deep head and original aroma, delivering a complex, full bodied flavour. Pure enjoyment! Secondary fermentation in the bottle.",
	//     "age" : 3
	//   },
	//   {
	//     "alcohol": 9.2,
	//     "name": "Rochefort 8",
	//     "description": "A dry but rich flavoured beer with complex fruity and spicy flavours.",
	//     "age" : 26
	//   },
	//   {
	//     "alcohol": 11.3,
	//     "name": "Rochefort 10",
	//     "description": "The top product from the Rochefort Trappist brewery. Dark colour, full and very impressive taste. Strong plum, raisin, and black currant palate, with ascending notes of vinousness and other complexities.",
	//     "age" : 3
	//   },
	//   {
	//     "alcohol": 7,
	//     "name": "Chimay Rouge",
	//     "description": "This Trappist beer possesses a beautiful coppery colour that makes it particularly attractive. Topped with a creamy head, it gives off a slight fruity apricot smell from the fermentation. The aroma felt in the mouth is a balance confirming the fruit nuances revealed to the sense of smell. This traditional Belgian beer is best savoured at cellar temperature ",
	//     "age": 12
	//   }
	// ];

	$http.get('beers/beers.json').
		success(function(data, status, headers, config) {
			$scope.beers = data;
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	$scope.order = "name";
}]);