'use strict';

angular.module('fantasyApp.controllers.header', ['fantasyApp.services.login'])
  .controller('HeaderController', ['$scope', '$location', 'loginService', 'angularFire', 'FBURL', 
    function($scope, $location, loginService, angularFire, FBURL) {

      $scope.$on("angularFireAuth:login", function() {
        angularFire(new Firebase(FBURL+'/users/'+$scope.auth.id), $scope, 'user');
      });

      $scope.logout = function() {
        loginService.logout('/signin');
      };

      $scope.navbarEntries = [
      {
        "title": "NFL Teams",
        "link": "/nflteams"
      }];

      $scope.$on('$routeChangeSuccess', function() {
console.log("jaknsdfkj");
        $scope.navbarEntries.forEach(
          function(data) {
            console.log($location.path())

            data.isActive = ($location.path().indexOf(data.link) == 0);
          }
        )
      })
    }])