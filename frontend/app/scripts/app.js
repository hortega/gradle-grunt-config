'use strict';

/**
 * @ngdoc overview
 * @name nameApp
 * @description
 * # nameApp
 *
 * Main module of the application.
 */
angular
  .module('nameApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'NameCtrl',
        controllerAs: 'name'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
