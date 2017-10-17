angular.module('alurapic').controller('FotosController', function($scope, $http) {

//    $scope.fotos = [
//        {
//            titulo: "Leão",
//            url: "http://www.fundosanimais.com/Minis/leoes.jpg"
//        },
//        {
//            titulo: "Leão 2",
//            url: "http://www.fundosanimais.com/Minis/leoes.jpg"
//        },
//        {
//            titulo: "Leão 3",
//            url: "http://www.fundosanimais.com/Minis/leoes.jpg"
//        },
//        {
//            titulo: "Leão 4",
//            url: "http://www.fundosanimais.com/Minis/leoes.jpg"
//        },
//        {
//            titulo: "Leão 5",
//            url: "http://www.fundosanimais.com/Minis/leoes.jpg"
//        }
//    ];
    $scope.fotos = [];
    $scope.filtro = '';

   // var promise = $http.get('http://localhost:3000/v1/fotos');
   // promise.then(function(retorno) {
   //     $scope.fotos = retorno.data;
   // }).catch(function(error) {
   //     console.log(error);
   // });
   $http.get('http://localhost:3000/v1/fotos')
        .success(function(fotos){
            $scope.fotos = fotos;
        })
        .error(function(error) {
            console.log(error);
        });

});
