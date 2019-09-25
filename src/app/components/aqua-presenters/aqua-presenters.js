import "./aqua-presenters.scss";

export default function (module) {
  module.directive('aquaPresenters', function () {
    return ({
      restrict: 'E',
      templateUrl: require('./aqua-presenters.html'),
      controller: function ($scope) {
        $scope.aquaPresenters = require('./aqua-presenters.json');
      }
    });
  });
}