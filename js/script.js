var pokedex = angular.module("pokedex", [])
pokedex.controller("PokemonCtrl", function($scope,$rootScope,$http){
	$rootScope.pokedexB = {};
	$http({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/25"
	}).then(function Datos(x){
		$rootScope.PokedexB = x.data
	})
})