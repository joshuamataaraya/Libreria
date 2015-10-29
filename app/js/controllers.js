'use strict';

/* Controllers */
var mnemonicApp = angular.module('mnemonicControllers', []);

mnemonicApp.controller('OffertsListCtrl', function ($scope) {
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

mnemonicApp.controller('booksCtrl', function ($scope) {
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

mnemonicApp.controller('musicCtrl', function ($scope) {
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

mnemonicApp.controller('comicsCtrl', function ($scope) {
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

mnemonicApp.controller('severalArticlesCtrl', function ($scope) {
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

mnemonicApp.controller('moviesCtrl', function ($scope) {
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
mnemonicApp.controller('loginCtrl', function ($scope) {
  $scope.login=function(){
    window.alert('Loggin Correcto');
  };
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
