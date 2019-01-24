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
		.state('exercises', {
			url: "/ejercicios",
			templateUrl: "app/templates/exercises.html",
			controller: "exercisesCtrl as exCtrl"
		})



	}
]);


educationApp.run( [ "$rootScope", "$state", "$stateParams", "$anchorScroll",
	function ($rootScope, $state, $stateParams, $anchorScroll) {

		$rootScope.$on('$stateChangeStart', function () {
			$anchorScroll();
		} );
	}
] );
educationApp.controller('homeController', [ function( apiService ) {

	console.log('ctrl saludo homeController!');
	var me = this;
	me.nombre = window.nombreUsuario;
	me.saludo = 'hola men!';
} ] );

educationApp.controller('variablesCtrl', [ function( apiService ) {

	console.log('ctrl saludo variablesCtrl!');
	var me = this;
	  me.list1 = {title: 'AngularJS - Drag Me'};
  me.list2 = {};
	me.nombre = window.nombreUsuario;
	me.saludo = 'hola men!';
} ] );
educationApp.controller('conditionalsCtrl', [ function( apiService ) {

	console.log('ctrl saludo conditionalsCtrl!');
	var me = this;
	me.nombre = window.nombreUsuario;
	me.saludo = 'hola men!';
} ] );
educationApp.controller('exercisesCtrl', [ "$anchorScroll", function( $anchorScroll ) {


	var me = this;

	me.evaluateTest = function () {
		me.resolved = true;
		me.errorEx1      = false;
		me.errorEx2      = false;
		me.errorEx3      = false;
		me.hasError = false;

		if ( me.ex1 !== '18' ) {
			me.errorEx1 = true;
			me.hasError = true;

		}
		if ( me.ex2 !== 'Fonseca' ) {
			me.errorEx2 = true;
			me.hasError = true;
		}
		if ( me.ex3 !== '12' ) {
			me.errorEx3 = true;
			me.hasError = true;
		}
		$anchorScroll();

	}

} ] );