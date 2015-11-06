'use strict';

/* App Module */
var mnemonicApp = angular.module('mnemonicApp', [
  'ngRoute',

  'mnemonicControllers',
  'ngCookies'
]);
mnemonicApp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
mnemonicApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/offerts', {
        resolve:{
          "check":function($rootScope,$cookies){
            if($cookies.get('login')!='')
            {
              if($cookies.get('login')=='Admin'){
                  $rootScope.isAdmin=true;
              }
              if($cookies.get('isFrecuente')=='true'){
                $scope.isFrecuente=true;
              }
              $rootScope.isLogged=true;
            }
          }
        },
        templateUrl: 'app/partials/ofertas.html',
        controller: 'OffertsListCtrl'
      }).
      when('/login', {
        templateUrl: 'app/partials/login.html',
        controller: 'loginCtrl'
      }).
      when('/resenas', {
        templateUrl: 'app/partials/resenas.html',
        controller: 'resenaCtrl'
      }).
      when('/logout', {
        controller: 'logoutCtrl'
      }).
      when('/newLogin', {
        templateUrl: 'app/partials/newLogin.html',
        controller: 'newLoginCtrl'
      }).
      when('/books', {
        resolve:{
          "check":function($rootScope,$cookies){
            if($cookies.get('login')!='')
            {
              if($cookies.get('login')=='Admin'){
                  $rootScope.isAdmin=true;
              }
              if($cookies.get('isFrecuente')=='true'){
                $scope.isFrecuente=true;
              }
              $rootScope.isLogged=true;
            }
          }
        },
        templateUrl: 'app/partials/products.html',
        controller: 'booksCtrl'
      }).
      when('/music', {
        resolve:{
          "check":function($rootScope,$cookies){
            if($cookies.get('login')!='')
            {
              if($cookies.get('login')=='Admin'){
                  $rootScope.isAdmin=true;
              }
              if($cookies.get('isFrecuente')=='true'){
                $scope.isFrecuente=true;
              }
              $rootScope.isLogged=true;
            }
          }
        },
        templateUrl: 'app/partials/products.html',
        controller: 'musicCtrl'
      }).
      when('/comics', {
        resolve:{
          "check":function($rootScope,$cookies){
            if($cookies.get('login')!='')
            {
              if($cookies.get('login')=='Admin'){
                  $rootScope.isAdmin=true;
              }
              if($cookies.get('isFrecuente')=='true'){
                $scope.isFrecuente=true;
              }
              $rootScope.isLogged=true;
            }
          }
        },
        templateUrl: 'app/partials/products.html',
        controller: 'comicsCtrl'
      }).
      when('/severalArticles', {
        resolve:{
          "check":function($rootScope,$cookies){
            if($cookies.get('login')!='')
            {
              if($cookies.get('login')=='Admin'){
                  $rootScope.isAdmin=true;
              }
              if($cookies.get('isFrecuente')=='true'){
                $scope.isFrecuente=true;
              }
              $rootScope.isLogged=true;
            }
          }
        },
        templateUrl: 'app/partials/products.html',
        controller: 'severalArticlesCtrl'
      }).
      when('/movies', {
        resolve:{
          "check":function($rootScope,$cookies){
            if($cookies.get('login')!='')
            {
              if($cookies.get('login')=='Admin'){
                  $rootScope.isAdmin=true;
              }
              if($cookies.get('isFrecuente')=='true'){
                $scope.isFrecuente=true;
              }
              $rootScope.isLogged=true;
            }
          }
        },
        templateUrl: 'app/partials/products.html',
        controller: 'moviesCtrl'
      }).
      when('/productDetails/:products', {
        resolve:{
          "check":function($rootScope,$cookies){
            if($cookies.get('login')!='')
            {
              if($cookies.get('login')=='Admin'){
                  $rootScope.isAdmin=true;
              }
              if($cookies.get('isFrecuente')=='true'){
                $scope.isFrecuente=true;
              }
              $rootScope.isLogged=true;
            }
          }
        },
        templateUrl: 'app/partials/productDetails.html',
        controller: 'detailsCtrl'
      }).
      when('/shoppingCart', {
        resolve:{
          "check":function($location,$rootScope,$cookies){
            if($cookies.get('login')=='')
            {
              $location.path('/login');
            }
          }
        },
        templateUrl: 'app/partials/shoppingCart.html',
        controller: 'shoppingCartCtrl'
      }).
      when('/compra', {
        // resolve:{
        //   "check":function($location,$rootScope){
        //     if(!$rootScope.isLogged){
        //       $location.path('/login');
        //     }
        //   }
        // },

        templateUrl: 'app/partials/compra.html',
        controller: 'compraCtrl'
      }).
      when('/addProduct', {
        resolve:{
          "check":function($location,$rootScope,$cookies){
            if($cookies.get('login') !=''  ){
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
          "check":function($location,$rootScope,$cookies){
            if($cookies.get('login') !=''){
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
          "check":function($location,$rootScope,$cookies){
            if($cookies.get('login') !=''){
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
