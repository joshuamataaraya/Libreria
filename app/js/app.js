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
        templateUrl: 'app/partials/ofertas.html',
        controller: 'OffertsListCtrl'
      }).
      when('/login', {
        templateUrl: 'app/partials/login.html',
        controller: 'loginCtrl'
      }).
      when('/logout', {
        controller: 'logoutCtrl'
      }).
      when('/newLogin', {
        templateUrl: 'app/partials/newLogin.html',
        controller: 'newLoginCtrl'
      }).
      when('/books', {
        templateUrl: 'app/partials/products.html',
        controller: 'booksCtrl'
      }).
      when('/music', {
        templateUrl: 'app/partials/products.html',
        controller: 'musicCtrl'
      }).
      when('/comics', {
        templateUrl: 'app/partials/products.html',
        controller: 'comicsCtrl'
      }).
      when('/severalArticles', {
        templateUrl: 'app/partials/products.html',
        controller: 'severalArticlesCtrl'
      }).
      when('/movies', {
        templateUrl: 'app/partials/products.html',
        controller: 'moviesCtrl'
      }).
      when('/productDetails/:products', {
        templateUrl: 'app/partials/productDetails.html',
        controller: 'detailsCtrl'
      }).
      when('/shoppingCart', {
        resolve:{
          "check":function($location,$rootScope){
            if(!$rootScope.isLogged){
              $location.path('/login');
            }
          }
        },
        templateUrl: 'app/partials/shoppingCart.html',
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
        templateUrl: 'app/partials/addProduct.html',
        controller: 'addProductCtrl'
      }).
      when('/editProduct/:products', {
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
        templateUrl: 'app/partials/editProduct.html',
        controller: 'editProductCtrl'
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
        templateUrl: 'app/partials/specifyDiscount.html',
        controller: 'specifyDiscountCtrl'
      }).
      otherwise({
        redirectTo: '/offerts'
      });
  }]);
