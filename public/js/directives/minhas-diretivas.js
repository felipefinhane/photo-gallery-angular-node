angular.module('minhasDiretivas', [])
    .directive('meuPainel', function() {
        var ddo = {
            restrict : "AE", //Attribut Element
            scope : {
                titulo : '@titulo'
            },
            transclude : true,
            templateUrl : '/js/directives/meu-painel.html',
        };
        return ddo;
    })
    .directive('minhaFoto', function() {
        var ddo = {
            restrict : "AE",
            scope : {
                titulo : '@titulo',
                url : '@url'
            },
            templateUrl : '/js/directives/minha-foto.html'
        };
        return ddo;
    });
