/**
 * Created by root on 29/6/16.
 */
(function(){
    var LocalStorageService = function(){
        var factory = {};
        /**
         *
         * get service
         */
        factory.get = function(key){
            return JSON.parse(sessionStorage.getItem(key));
           // return sessionStorage.getItem(key);
        };
        /**
         *
         */
        factory.set = function(key, val) {
            return sessionStorage.setItem(key, JSON.stringify(val));
           // return sessionStorage.setItem(key, val);
        };
        /**
         * unset
         */
        factory.unset = function(key) {
            return sessionStorage.removeItem(key);
        };

        factory.removeHashKey = function(jsonArray){
            return JSON.parse(angular.toJson(jsonArray));
        };
        return factory;

    };
    angular.module('seniorApp').factory('LocalStorageService',LocalStorageService);
})();
