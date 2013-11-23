angular.module('rlping', ['restangular', 'ui.bootstrap']).
  controller('PingCtrl', function($scope, Restangular) {
    $scope.pings = [];
    Restangular.all('pings').getList({}).then(function(pings) {
      $scope.pings = pings;
    }, function errorCallback() {
      alert("Oops error from server :(");
    });
  });

