'use strict';

/* App Module */
var mnemonicApp = angular.module('mnemonicApp', [
  'ngRoute',

  'mnemonicControllers',
  'angularFileUpload'
]);

mnemonicApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/offerts', {
        templateUrl: 'partials/ofertas.html',
        controller: 'OffertsListCtrl'
      }).
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl'
      }).
      when('/logout', {
        controller: 'logoutCtrl'
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
        resolve:{
          "check":function($location,$rootScope){
            if(!$rootScope.isLogged){
              $location.path('/login');
            }
          }
        },
        templateUrl: 'partials/shoppingCart.html',
        controller: 'shoppingCartCtrl'
      }).
      when('/addProduct', {
        resolve:{
          "check":function($location,$rootScope){
            if(!$rootScope.isLogged ){
              if(!$rootScope.isAdmin){
                alert('Esta opcion solo esta disponible para administradores')
                $location.path('/login');
              }
            }
          }
        },
        templateUrl: 'partials/addProduct.html',
        controller: 'addProductCtrl'
      }).
      when('/addOffert', {
        resolve:{
          "check":function($location,$rootScope){
            if(!$rootScope.isLogged ){
              if(!$rootScope.isAdmin){
                alert('Esta opcion solo esta disponible para administradores')
                $location.path('/login');
              }
            }
          }
        },
        templateUrl: 'partials/addOffert.html',
        controller: 'addOffertCtrl'
      }).
      when('/specifyDiscount', {
        resolve:{
          "check":function($location,$rootScope){
            if(!$rootScope.isLogged ){
              if(!$rootScope.isAdmin){
                alert('Esta opcion solo esta disponible para administradores')
                $location.path('/login');
              }
            }
          }
        },
        templateUrl: 'partials/specifyDiscount.html',
        controller: 'specifyDiscountCtrl'
      }).
      otherwise({
        redirectTo: '/offerts'
      });
  }]);
