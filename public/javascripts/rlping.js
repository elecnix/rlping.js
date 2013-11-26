angular.module('rlping', ['restangular', 'ui.bootstrap']).
  controller('PingCtrl', function($scope, Restangular) {
    $scope.pings = [];
    Restangular.all('pings').getList({}).then(function(pings) {
      if (pings.errno) {
        alert("Oops! " + pings.code + " " + pings.errno + " " + pings.syscall);
        return;
      }
      $scope.pings = pings;
    }, function errorCallback() {
      alert("Oops error from server :(");
    });
  }).
  filter('iphref', function() {
    return function(input) {
      return input.replace(/\/.*/, '');
    }
  });

