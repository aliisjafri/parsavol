(function(){
	'use strict';
	angular.module('myApp')
		.directive('myDirective', myDirective);
		function myDirective(){
			var directive = {
				restrict:'E',
				//This is an Isolate Scope allows for reusablility
				scope:{
					customer: '=info' //'=info' tell $compile to bind to the info attribute. Attribute for the directive to use.
					/* 'info' is the attribute you can use inline with the directive's element which is then bound to the desired properties from
					the appController.
					'customer' acts as robo or nomo  and in the HTML its passed in as 'ctrlVm.robo' b/c of John Papa Style Guide
					 */
				},
				templateUrl: 'my-directive.html',
				/* this would be the better way to write out the template so that Init isnt run twice */
				//controller:'MyController',
				//controllerAs:'vm',
				//bindToController:true // because the scope is isolated
			};
			return directive;
		}
})();
