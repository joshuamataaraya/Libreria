'use strict';

/* Controllers */
var mnemonicApp = angular.module('mnemonicControllers', []);
mnemonicApp.controller('OffertsListCtrl', function ($scope, $http, $rootScope, $location, $route, $cookies) {

  $http.get("http://localhost:800/getOfertas.php")
  .success(function(response) {$scope.products = response;});

  socket.emit('retcompra',"");
  socket.on('compras', function(compra){
    $rootScope.compra = compra;
   });

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

  $scope.storeProduct=function(id){

    socket.emit('varcompra',id);
  }


});

mnemonicApp.controller('booksCtrl', function ($scope,$location,$http,$route,$rootScope) {

  $http.get("http://localhost:800/getCategorias.php?name=Libros")
  .success(function(response) {$scope.products = response;});

  socket.emit('retcompra',"");
  socket.on('compras', function(compra){
    $rootScope.compra = compra;
   });

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
  $scope.storeProduct=function(id){
    socket.emit('varcompra',id);
  }

  $scope.categoryName = "Libros";

  });


mnemonicApp.controller('musicCtrl', function ($scope,$location,$http, $rootScope) {

  $http.get("http://localhost:800/getCategorias.php?name=Musica")
  .success(function(response) {$scope.products = response;});

  socket.emit('retcompra',"");
  socket.on('compras', function(compra){
    $rootScope.compra = compra;
   });


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
  $scope.storeProduct=function(id){
    socket.emit('varcompra',id);
  }

  $scope.categoryName = "Musica";
  });


mnemonicApp.controller('comicsCtrl', function ($scope,$location,$http,$rootScope) {

  $http.get("http://localhost:800/getCategorias.php?name=Comics")
  .success(function(response) {$scope.products = response;});

  socket.emit('retcompra',"");
  socket.on('compras', function(compra){
    $rootScope.compra = compra;
   });

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
  $scope.storeProduct=function(id){
    socket.emit('varcompra',id);
  }

  $scope.categoryName = "Comics";

  });


mnemonicApp.controller('severalArticlesCtrl', function ($scope,$location,$http,$rootScope) {
  $http.get("http://localhost:800/getCategorias.php?name=Varios")
  .success(function(response) {$scope.products = response;});

  socket.emit('retcompra',"");
  socket.on('compras', function(compra){
    $rootScope.compra = compra;
   });


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
  $scope.storeProduct=function(id){
    socket.emit('varcompra',id);
  }

  $scope.categoryName = "Articulos Varios";

  //funcion para mandar correo, no va aqui, pero es para pruebas!!!!
  /*$scope.sendMail = function(){
    socket.emit('email','hola!! mensaje personalizado');
  }*/


  });


mnemonicApp.controller('moviesCtrl', function ($scope,$location,$http,$rootScope) {
  $http.get("http://localhost:800/getCategorias.php?name=Peliculas")
  .success(function(response) {$scope.products = response;});

  socket.emit('retcompra',"");
  socket.on('compras', function(compra){
    $rootScope.compra = compra;
   });

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
  $scope.storeProduct=function(id){
    socket.emit('varcompra',id);
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
mnemonicApp.controller('loginCtrl', function ($scope, $http,$rootScope,$location,$cookies) {
  $scope.login=function(){
    $rootScope.isLogged=true;
     var url = "http://localhost:800/userType.php?email="+ $scope.email+"&pass="+$scope.password;
     $http.get(url)
     .success(function(response) {$scope.valid = response[0].type;
         if($scope.valid=='admin'){
           $rootScope.isAdmin=true;
           $rootScope.emailV=$scope.email;
           $location.path('#/offerts');
           $cookies.put('login','Admin');
         }else if ($scope.valid=='false') {
           $rootScope.isLogged=false;
         }else if ($scope.valid == 'clientFrecuente'){
           $rootScope.isLogged=true;
           $rootScope.emailV=$scope.email;
           $cookies.put('isFrecuente','true');
           $location.path('#/offerts');
           $cookies.put('login',$scope.email);
         }else{
              $rootScope.frecuente = false;
              $rootScope.isLogged = true;
              $rootScope.emailV=$scope.email;
              $location.path('#/offerts');
              $cookies.put('login',$scope.email);
            }
        });
  };
  $scope.logout=function(){
    $rootScope.isAdmin=false;
    $rootScope.isLogged=false;
    $rootScope.email="";
    $cookies.put('login','');
    $cookies.put('isFrecuente','');
  };
  $scope.email = "";
  $scope.password="";
});

mnemonicApp.controller('newLoginCtrl', function ($scope,$rootScope,$http,$location, $cookies) {
  $scope.addUser=function(){
    $http.get("http://localhost:800/register.php?correo="+$scope.email+"&nombre="+$scope.nombre+"&contrasena="+$scope.password)
    .success(function(response) {$scope.val = response[0].valid;
    if($scope.val == "false"){
      $scope.message = "Usuario ya registrado dentro del sistema";
    }else{
      $cookies.put('login',$scope.email);
      $rootScope.isLogged = true;
      $location.path('#/offerts');
    }
    });
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
mnemonicApp.controller('resenaCtrl', function ($scope, $routeParams, $http, $rootScope, $route, $cookies) {
  var email = $cookies.get("login");
  $http.get("http://localhost:800/getProductoBought.php?cliente="+email)
  .success(function(response) {$scope.products = response});


  $scope.addResena= function(productid, resena){
    var email = $cookies.get("login");
    $http.get("http://localhost:800/setResena.php?cliente="+email+"&producto="+productid+"&descripcion="+resena)
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

mnemonicApp.controller('compraCtrl', function ($scope, $routeParams, $http, $rootScope,$cookies) {
  $scope.token='_0tAa8tfdXT2CDwESYRbKK_pmWI9baqNZY3ptdip2uKqwh3xYFgn-FtM0ea';
  socket.emit('retcompra',"");
  socket.on('compras', function(compra){
    $rootScope.compra = compra;
    var n = $rootScope.compra.length;
    var compra = $rootScope.compra.substring(0,n-1); 

    var email = $cookies.get("login");

    $http.get("http://localhost:800/createPurchase.php?productos="+compra+"&cliente="+email)
    .success(function(response) {$scope.products = response[0]});



   });

  var email = $cookies.get("login");
  var msg = "Gracias por su compra en Mnemonic, consulte paypal para su factura";
  socket.emit('email',msg, email);
  socket.emit('elimcompra',"");

  ///////////cookie.get("login")????

  // $http.post('https://www.sandbox.paypal.com/cgi-bin/webscr',
  //     {
  //         tx: $routeParams.tx,
  //         at: $scope.token,
  //         cmd:"_notify-synch"
  //     }
  //   ).then(function successCallback(response) {
  //     // this callback will be called asynchronously
  //     // when the response is available
  //     alert('Here')
  //   }, function errorCallback(response) {
  //     // called asynchronously if an error occurs
  //     // or server returns response with an error status.
  //     alert('BAD')
  //   });

});
