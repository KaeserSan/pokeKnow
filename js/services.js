angular.module("myServices", [])
	.factory("Service", function( $http, $rootScope ){
		console.log("Service");
		function getPokemons(){
			var apiUrl = "http://pokeapi.co/api/v2/pokemon/<POKEMON-NAME>";
			// var apiUrl = "../json/pikachu.json";
			apiUrl = apiUrl.replace('<POKEMON-NAME>', $rootScope.searchModel);
			return $http.get( apiUrl );
		}	
		
		//$scope.broadcast('event-name', 'params...') // $emit
		return {
			getPokemons: getPokemons
		}
	})