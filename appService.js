(function(){
  'use strict';
  angular.module('myApp')
    .factory('myFactory', myFactory);

  myFactory.$inject = ['$http', '$q'];

  function myFactory($http, $q){
    return{
      getAllUsers: _getAllUsers
    }

    function _getAllUsers(){
      var settings = {
        url: "https://jsonplaceholder.typicode.com/users"
        , method: "GET"
        , cache: false
        , contentType: "application/json; charset=UTF-8"
        , withCredentials: true
      }
      return $http(settings).then(_getAllUsersSuccess, _getAllUsersFailure);
    }
    function _getAllUsersSuccess(response){
      return response.data;
    }
    function _getAllUsersFailure(error){
      return $q.reject(error);
    }
  }
})();
