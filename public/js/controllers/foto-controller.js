angular.module('alurapic')
    .controller('FotoController', function($scope) {
        $scope.foto = {};
        $scope.exibe = true;

        $scope.submeter = function() {
            console.log($scope.foto);
        };
    });
