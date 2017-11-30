(function() {
	'use strict';
	angular.module('myApp')
		.controller('MyController', MyController);

		MyController.$inject = ['myFactory'];

		function MyController(myFactory){
			var vm = this; // instantiates the context of the controller using this
			vm.users = [];
			vm.getUsers = _getUsers;

			function _getUsers(){
				console.log('Clicked Btn');
				myFactory.getAllUsers().then(function(response){
					console.log(response);
					vm.users = response;
				},
				function(error){
					console.log(error);
				}
			);
			}
			vm.robo = {
				 name:"Robert"
				,address:"515 North Alberta"
			};
			vm.nomo ={
				 name:"Nancy"
				,address: "323 West Slauson"
			};
			vm.romo ={
				 name:"Tony"
				,address: "009 South Dallas"
			};
			vm.$onInit = _$onInit;

			function _$onInit(){
				console.log("Init first");
			}
		}
})();
