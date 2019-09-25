export default function (module) {
  module.directive('aquaMasters', function () {
    return ({
      templateUrl: require('./aqua-masters.html'),
      controller: function ($scope) {
        $scope.workshops = require('./aqua-masters.json');
      }
    });
  });
}