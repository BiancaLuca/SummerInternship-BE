(function() {

    'use strict';

    angular
        .module('summerInternship')
        .factory('FirstPageService', ['$http', '$location', function($http, $location) {
            function find(){
                return $http.get("http://localhost:8090/getMovies",null);

            }

            function addCart(mv){
                return $http.put("/addMovie",mv)
            }

            return {
                find: find,
                addCart: addCart
            };

        }]);

})();