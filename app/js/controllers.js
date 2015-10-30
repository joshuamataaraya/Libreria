'use strict';

/* Controllers */
var mnemonicApp = angular.module('mnemonicControllers', []);

mnemonicApp.controller('OffertsListCtrl', function ($scope, $http) {

  $http.get("http://localhost:800/getOfertas.php")
  .success(function(response) {$scope.products = response;}); 
  });

mnemonicApp.controller('booksCtrl', function ($scope, $http) {
  $http.get("http://localhost:800/getCategorias.php?name=Libros")
  .success(function(response) {$scope.products = response;}); 
  });

mnemonicApp.controller('musicCtrl', function ($scope, $http) {
  $http.get("http://localhost:800/getCategorias.php?name=Musica")
  .success(function(response) {$scope.products = response;}); 
  });

mnemonicApp.controller('comicsCtrl', function ($scope, $http) {
  $http.get("http://localhost:800/getCategorias.php?name=Comics")
  .success(function(response) {$scope.products = response;}); 
  });

mnemonicApp.controller('severalArticlesCtrl', function ($scope, $http) {
  $http.get("http://localhost:800/getCategorias.php?name=Varios")
  .success(function(response) {$scope.products = response;}); 
  });

mnemonicApp.controller('moviesCtrl', function ($scope, $http) {
  $http.get("http://localhost:800/getCategorias.php?name=Peliculas")
  .success(function(response) {$scope.products = response;}); 
  });

mnemonicApp.controller('shoppingCartCtrl', function ($scope) {
  $scope.products = [
    {'name': 'Movie1',
    'id':1,
    'snippet': 'buena peli.',
    'normalPrice': 100,
    'newPrice': 50,
    'imgSource':'img/Products/Scary_Movie-1.jpg'},
    {'name': 'Book1',
    'id':2,
    'snippet': 'buena peli.',
    'normalPrice': 100,
    'newPrice': 50,
    'imgSource':'img/Products/Scary_Movie-1.jpg'}
  ];
});
mnemonicApp.controller('loginCtrl', function ($scope, $http) {
  $scope.login=function(){
    var url = "http://localhost:800/userType.php?email="+ $scope.email+"&pass="+$scope.password;
    $http.get(url)
    .success(function(response) {$scope.valid = response;});
    angular.forEach($scope.valid, function(value, key) {
        $scope.val = value.type;
        }
    );
  }
  $scope.val = "";  
  $scope.email="";
  $scope.password="";
});
mnemonicApp.controller('newLoginCtrl', function ($scope) {
  $scope.addUser=function(){
    window.alert('Usuario Registrado');
  }
  $scope.nombre="";
  $scope.email="";
  $scope.password="";
});
