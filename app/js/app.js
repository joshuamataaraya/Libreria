'use strict';

/* App Module */
var mnemonicApp = angular.module('mnemonicApp', [
  'ngRoute',

  'mnemonicControllers'
]);

mnemonicApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/offerts', {
        templateUrl: 'partials/products.html',
        controller: 'OffertsListCtrl'
      }).
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl'
      }).
      when('/newLogin', {
        templateUrl: 'partials/newLogin.html',
        controller: 'newLoginCtrl'
      }).
      when('/books', {
        templateUrl: 'partials/products.html',
        controller: 'booksCtrl'
      }).
      when('/music', {
        templateUrl: 'partials/products.html',
        controller: 'musicCtrl'
      }).
      when('/comics', {
        templateUrl: 'partials/products.html',
        controller: 'comicsCtrl'
      }).
      when('/severalArticles', {
        templateUrl: 'partials/products.html',
        controller: 'severalArticlesCtrl'
      }).
      when('/movies', {
        templateUrl: 'partials/products.html',
        controller: 'moviesCtrl'
      }).
      when('/shoppingCart', {
        templateUrl: 'partials/shoppingCart.html',
        controller: 'shoppingCart'
      }).
      otherwise({
        redirectTo: '/offerts'
      });
  }]);
