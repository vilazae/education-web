/**
 * Create app.
 */
var educationApp = angular.module('educationApp', ['ui.router', 'ngCookies']);

/**
 * App configuration.
 */
educationApp.config([ '$stateProvider', '$urlRouterProvider', '$httpProvider', '$cookiesProvider', 
	function($stateProvider, $urlRouterProvider, $httpProvider, $cookiesProvider) {

		
		$urlRouterProvider.otherwise('/inicio');

		$stateProvider
		.state('home', {
			url: "/inicio",
			templateUrl: "app/templates/home.html",
			controller: "homeController as homeCtrl"
		})
		.state('variables', {
			url: "/variables",
			templateUrl: "app/templates/variables.html",
			controller: "variablesCtrl as varsCtrl"
		})		
		.state('conditionals', {
			url: "/condicionales",
			templateUrl: "app/templates/conditionals.html",
			controller: "conditionalsCtrl as condCtrl"
		})

		
			
	}
]);

educationApp.controller('homeController', [ function( apiService ) {

	console.log('ctrl saludo homeController!');	
	var me = this;
	me.nombre = window.nombreUsuario;
	me.saludo = 'hola men!';
} ] );

educationApp.controller('variablesCtrl', [ function( apiService ) {

	console.log('ctrl saludo variablesCtrl!');	
	var me = this;
	me.nombre = window.nombreUsuario;
	me.saludo = 'hola men!';
} ] );
educationApp.controller('conditionalsCtrl', [ function( apiService ) {

	console.log('ctrl saludo conditionalsCtrl!');	
	var me = this;
	me.nombre = window.nombreUsuario;
	me.saludo = 'hola men!';
} ] );