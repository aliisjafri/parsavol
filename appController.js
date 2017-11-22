(function() {
	'use strict';
	angular.module('myApp')
		.controller('MyController', MyController);

		MyController.$inject = [];

		function MyController(){
			var vm = this; // instantiates the context of the controller using this

			vm.robo = {
				 name:"Robert"
				,address:"515 North Alberta"
			};
			vm.nomo ={
				 name:"Nancy"
				,address: "323 West Slauson"
			};

			vm.$onInit = _$onInit;
			function _$onInit(){
				console.log("Init first");
			}
		}
})();
