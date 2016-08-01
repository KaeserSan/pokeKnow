angular.module('myControllersContainer', ['myServices'])
	.controller('mainCtrl', function ($scope, Service) {

//		$scope.watch('myVar', function() {
//        	alert('hey, myVar has changed!');
//    	});
//		$scope.on('event-name', function( event, params ){
//	
//		} )

		$scope.searchPokemons = function(){
			Service.getPokemons()
			.then( function ( dataPokemons ){
				console.log(dataPokemons);
				$scope.$broadcast('pokemonsReceived', dataPokemons ) // $emit
			})
		}
		
	})

	.controller('dataCtrl', function ($scope, Service) {
		$scope.$on('pokemonsReceived', function( event, pokemon ){
			console.log("Pokemon received...");
			console.log( pokemon )
			console.log( pokemon.data.sprites );
			$scope.pokemon = pokemon.data;
		})

	})
