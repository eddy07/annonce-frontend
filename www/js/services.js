angular.module('starter.services',[])
.factory('AddAnnonceService', function($http){
    var service = {};
   
      service.addAnnonce = function(annonce){
      return $http.post({
      });
    }
    
    return service;
});
