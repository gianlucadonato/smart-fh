'use strict';

angular
  .module('smartApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cars', {
        templateUrl: 'views/car_list.html',
        controller: 'CarListCtrl'
      })
      .when('/designers', {
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
        redirectTo: '/'
      });
  });
