'use strict';

/* Controllers */
var mnemonicApp = angular.module('mnemonicControllers', []);
mnemonicApp.controller('OffertsListCtrl', function ($scope, $http, $rootScope, $location, $route) {

  $http.get("http://localhost:800/getOfertas.php")
  .success(function(response) {$scope.products = response;});
 
  $scope.newOffer = 0;

  $scope.delete=function(productid){
    $http.get("http://localhost:800/eliminateOferta.php?id="+productid)
      .success(function(response) {$scope.val = response[0].valid;
                                      if($scope.val == true){
                                      alert("Oferta eliminada!");
                                      $route.reload();
                                    }
                                  });
    
  };
  $scope.modifyOffert=function(productId, price, offer){

    var price_int = Number(price);
    

    if(offer < price_int){
      $http.get("http://localhost:800/modifyOferta.php?id="+productId+"&precio=+"+offer)
      .success(function(response) {$scope.val = response[0].valid;
                                    if($scope.val == true){
                                      alert("Oferta cambiada!");
                                      $route.reload();
                                    }
                                  });
    }
    else{
      alert("Esta poniendo su oferta mayor que el precio actual, se recomienda modificar el producto primero");
    }
  }

  $scope.loadView =function(productId){
    $location.path('/productDetails/'+productId);
  }


});

mnemonicApp.controller('booksCtrl', function ($scope,$location,$http,$route) {

  $http.get("http://localhost:800/getCategorias.php?name=Libros")
  .success(function(response) {$scope.products = response;});
  $scope.delete=function(productid){
    $http.get("http://localhost:800/eliminateProduct.php?id="+productid)
    .success(function(response) {$scope.val = response[0].valid;
      if($scope.val == true){
        alert("Producto eliminado");
        $route.reload();
      }
    });

  }

  $scope.addOffert=function(productId, precio, offer){
    var price_int = Number(precio);
    
    if(offer < price_int){
      $http.get("http://localhost:800/createOferta.php?id="+productId+"&precio="+offer)
      .success(function(response) {$scope.val = response[0].valid;
                                    if($scope.val == true){
                                      alert("Oferta Generada!");
                                       $location.path('#/offerts');
                                    }
                                  });
    }
    else{
      alert("Esta poniendo su oferta mayor que el precio actual, se recomienda modificar el producto primero");
    }
  }

  $scope.loadView =function(productId){
    $location.path('/productDetails/'+productId);
  }
  $scope.edit=function(productId){
    $location.path('/editProduct/'+productId);
  }

  $scope.categoryName = "Libros";

  });


mnemonicApp.controller('musicCtrl', function ($scope,$location,$http) {

  $http.get("http://localhost:800/getCategorias.php?name=Musica")
  .success(function(response) {$scope.products = response;});

  $scope.delete=function(productid){
    $http.get("http://localhost:800/eliminateProduct.php?id="+productid)
    .success(function(response) {$scope.val = response[0].valid;
      if($scope.val == true){
        alert("Producto eliminado");
        $route.reload();
      }
    });

  }

  $scope.addOffert=function(productId, precio, offer){
    var price_int = Number(precio);
    
    if(offer < price_int){
      $http.get("http://localhost:800/createOferta.php?id="+productId+"&precio="+offer)
      .success(function(response) {$scope.val = response[0].valid;
                                    if($scope.val == true){
                                      alert("Oferta Generada!");
                                       $location.path('#/offerts');
                                    }
                                  });
    }
    else{
      alert("Esta poniendo su oferta mayor que el precio actual, se recomienda modificar el producto primero");
    }
  }

  $scope.loadView =function(productId){
    $location.path('/productDetails/'+productId);
  }
  $scope.edit=function(productId){
    $location.path('/editProduct/'+productId);
  }

  $scope.categoryName = "Musica";
  });


mnemonicApp.controller('comicsCtrl', function ($scope,$location,$http) {

  $http.get("http://localhost:800/getCategorias.php?name=Comics")
  .success(function(response) {$scope.products = response;});
  $scope.delete=function(productid){
    $http.get("http://localhost:800/eliminateProduct.php?id="+productid)
    .success(function(response) {$scope.val = response[0].valid;
      if($scope.val == true){
        alert("Producto eliminado");
        $route.reload();
      }
    });

  }

  $scope.addOffert=function(productId, precio, offer){
    var price_int = Number(precio);
    
    if(offer < price_int){
      $http.get("http://localhost:800/createOferta.php?id="+productId+"&precio="+offer)
      .success(function(response) {$scope.val = response[0].valid;
                                    if($scope.val == true){
                                      alert("Oferta Generada!");
                                       $location.path('#/offerts');
                                    }
                                  });
    }
    else{
      alert("Esta poniendo su oferta mayor que el precio actual, se recomienda modificar el producto primero");
    }
  }

  $scope.loadView =function(productId){
    $location.path('/productDetails/'+productId);
  }
  $scope.edit=function(productId){
    $location.path('/editProduct/'+productId);
  }

  $scope.categoryName = "Comics";

  });


mnemonicApp.controller('severalArticlesCtrl', function ($scope,$location,$http) {
  $http.get("http://localhost:800/getCategorias.php?name=Varios")
  .success(function(response) {$scope.products = response;});
  $scope.delete=function(productid){
    $http.get("http://localhost:800/eliminateProduct.php?id="+productid)
    .success(function(response) {$scope.val = response[0].valid;
      if($scope.val == true){
        alert("Producto eliminado");
        $route.reload();
      }
    });

  }

  $scope.addOffert=function(productId, precio, offer){
    var price_int = Number(precio);
    
    if(offer < price_int){
      $http.get("http://localhost:800/createOferta.php?id="+productId+"&precio="+offer)
      .success(function(response) {$scope.val = response[0].valid;
                                    if($scope.val == true){
                                      alert("Oferta Generada!");
                                       $location.path('#/offerts');
                                    }
                                  });
    }
    else{
      alert("Esta poniendo su oferta mayor que el precio actual, se recomienda modificar el producto primero");
    }
  }

  $scope.loadView =function(productId){
    $location.path('/productDetails/'+productId);
  }
  $scope.edit=function(productId){
    $location.path('/editProduct/'+productId);
  }

  $scope.categoryName = "Articulos Varios";

  //funcion para mandar correo, no va aqui, pero es para pruebas!!!!
  /*$scope.sendMail = function(){
    socket.emit('email','hola!! mensaje personalizado');
  }*/


  });


mnemonicApp.controller('moviesCtrl', function ($scope,$location,$http) {
  $http.get("http://localhost:800/getCategorias.php?name=Peliculas")
  .success(function(response) {$scope.products = response;});

  $scope.delete=function(productid){
    $http.get("http://localhost:800/eliminateProduct.php?id="+productid)
    .success(function(response) {$scope.val = response[0].valid;
      if($scope.val == true){
        alert("Producto eliminado");
        $route.reload();
      }
    });

  }

  $scope.addOffert=function(productId, precio, offer){
    var price_int = Number(precio);
    
    if(offer < price_int){
      $http.get("http://localhost:800/createOferta.php?id="+productId+"&precio="+offer)
      .success(function(response) {$scope.val = response[0].valid;
                                    if($scope.val == true){
                                      alert("Oferta Generada!");
                                       $location.path('#/offerts');
                                    }
                                  });
    }
    else{
      alert("Esta poniendo su oferta mayor que el precio actual, se recomienda modificar el producto primero");
    }
  }
  $scope.edit=function(productId){
    $location.path('/editProduct/'+productId);
  }

  $scope.loadView =function(productId){
    $location.path('/productDetails/'+productId);
  }

  $scope.categoryName = "Peliculas";
  });


mnemonicApp.controller('shoppingCartCtrl', function ($scope,$location) {
  var viewCart=function(){
    var form=document.createElement("form");
    form.setAttribute("method","post");
    form.setAttribute("action","https://www.paypal.com/cgi-bin/webscr");

    var cmd=document.createElement("input");
    cmd.setAttribute("type","hidden");
    cmd.setAttribute("name","cmd");
    cmd.setAttribute("value","_s-xclick");
    form.appendChild(cmd);

    var encrypted=document.createElement("input");
    encrypted.setAttribute("type","hidden");
    encrypted.setAttribute("name","encrypted");
    encrypted.setAttribute("value","-----BEGIN PKCS7-----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-----END PKCS7-----");
    form.appendChild(encrypted);

    document.body.appendChild(form);
    form.submit();
  }

  $scope.viewCart=viewCart();
});
mnemonicApp.controller('loginCtrl', function ($scope, $http,$rootScope,$location) {
  $scope.login=function(){
    $rootScope.isLogged=true;
    $rootScope.isAdmin=true;
    // var url = "http://localhost:800/userType.php?email="+ $scope.email+"&pass="+$scope.password;
    // $http.get(url)
    // .success(function(response) {$scope.valid = response;});
    // angular.forEach($scope.valid, function(value, key) {
    //     if(value.type=='admin'){
    //       $rootScope.isAdmin=true;
    //     }else if (value.type=='false') {
    //       $rootScope.isLogged=false;
    //     }else if (value.type == 'clientFrecuente'){
    //       $rootScope.frecuente = true;   
    //       $rootScope.isLogged=true;
    //     }else{
    //          $rootScope.frecuente = false;
    //          $rootScope.isLogged = true;
    //        }
    //   }
    // );
    $rootScope.emailV=$scope.email;
    $location.path('#/offerts');
  };
  $scope.logout=function(){
    $rootScope.isAdmin=false;
    $rootScope.isLogged=false;
    $rootScope.frecuente = false;
    $rootScope.emailV="";
  };
  $scope.email = "";
  $scope.password="";
});

mnemonicApp.controller('newLoginCtrl', function ($scope,$rootScope,$http,$location) {
  $scope.addUser=function(){
    $http.get("http://localhost:800/register.php?correo="+$scope.email+"&nombre="+$scope.nombre+"&contrasena="+$scope.password)
    .success(function(response) {$scope.val = response[0].valid;});
    if($scope.val == "false"){
      $scope.message = "Usuario ya registrado dentro del sistema";
    }else{
      $rootScope.email = $scope.email;
      $rootScope.isLogged = true;
      $location.path('#/offerts');
    } 
  }
  $scope.message ="";
  $scope.nombre="";
  $scope.email="";
  $scope.password="";
});
mnemonicApp.controller('addProductCtrl', function ($scope, $http, $location) {
  //en $scope.product esta el producto para guardar en la base
  $scope.addProduct=function(nombre,descripcion,precio,categoria,subcategoria){
    var fileVal=document.getElementById("abc");
    var res = fileVal.value.slice(12);
    var finalstr = "app/img/Products/" + res; 

    alert(finalstr);

    $http.get("http://localhost:800/createProduct.php?nombre="+nombre+"&descripcion="+descripcion+"&imagen="+finalstr+"&precio="+precio+"&categoria="+categoria+"&subcategoria="+subcategoria)
    .success(function(response) {$scope.val = response[0].valid;
                                    if($scope.val == true){
                                      alert("Producto agregado!");
                                       $location.path('#/offerts');
                                    }
                                  }); 
  }
});

mnemonicApp.controller('specifyDiscountCtrl', function ($scope, $http, $location) {
  $scope.modify=function(discount){
    var disc = discount/100;
    $http.get("http://localhost:800/changeDiscount.php?porcentaje="+disc)
    .success(function(response) {$scope.val = response[0].valid;
                                    if($scope.val == true){
                                      alert("Descuento cambiado!");
                                       $location.path('#/offerts');
                                    }
                                  }); 
  }
});
mnemonicApp.controller('detailsCtrl', function ($scope, $routeParams, $http) {
  $http.get("http://localhost:800/getProducto.php?id="+$routeParams.products)
  .success(function(response) {$scope.productDetails = response[0]});
  
                                     
});
mnemonicApp.controller('resenaCtrl', function ($scope, $routeParams, $http, $rootScope, $route) {
  $http.get("http://localhost:800/getProductoBought.php?cliente="+$rootScope.emailV)
  .success(function(response) {$scope.products = response});

  $scope.addResena= function(productid, resena){
    $http.get("http://localhost:800/setResena.php?cliente="+$rootScope.emailV+"&producto="+productid+"&descripcion="+resena)
    .success(function(response) {$scope.val = response[0].valid;
                                    if($scope.val == true){
                                       alert("Reseña Generada!");
                                       $route.reload();
                                    }
                                  });

  }
  
                                     
});
mnemonicApp.controller('editProductCtrl', function ($scope, $routeParams, $http, $location) {
  $http.get("http://localhost:800/getProducto.php?id="+$routeParams.products)
  .success(function(response) {$scope.productDetails = response[0]});

  $scope.edit=function(){
    var fileVal=document.getElementById("abc");
    var finalstr;
    if(fileVal.value == ""){
      finalstr = "";
    }else{
      var res = fileVal.value.slice(12);
      finalstr = "app/img/Products/" + res;
    } 
    $http.get("http://localhost:800/modifyProduct.php?id="+$scope.productDetails.id+"&nombre="+$scope.name+"&descripcion="+$scope.descrip+"&imagen="+finalstr+"&precio="+$scope.price+"&categoria="+$scope.cat+"&subcategoria="+$scope.subcat)
    .success(function(response) {$scope.val = response[0].valid;
                                    if($scope.val == true){
                                      alert("Producto agregado!");
                                       $location.path('#/offerts');
                                    }else{
                                      alert("error?");
                                    }
                                  }); 
  }
  $scope.name = "";
  $scope.descrip = "";
  $scope.price = "";
  $scope.cat = "";
  $scope.subcat = "";

  $scope.categorias=['Libros','Musica','Comics','Articulos Varios', 'Peliculas'];
});
