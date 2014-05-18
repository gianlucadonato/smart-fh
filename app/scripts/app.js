'use strict';

angular
  .module('smartApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cars', {
        templateUrl: 'views/car_list.html',
        controller: 'CarListCtrl'
      })
      .when('/cars/:id', {
        templateUrl: 'views/car_details.html',
        controller: 'CarListCtrl'
      })
      .when('/artists', {
        templateUrl: 'views/designer_list.html',
        controller: 'DesignerListCtrl'
      })
      .when('/contests', {
        templateUrl: 'views/contests.html',
        controller: 'ContestsCtrl'
      })
      .when('/my_smart', {
        templateUrl: 'views/my_smart.html',
        controller: 'MySmartCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
