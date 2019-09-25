import './aqua-schedule.scss';

export default function (module) {
  module.directive('aquaSchedule', function () {
    return ({
      restrict: 'E',
      templateUrl: require('./aqua-schedule.html'),
      controller: function ($scope) {
        $scope.dayone = require('./workshops.json');
        $scope.daytwo = require('./master-class.json');

        $scope.SCHEDULES = {
          ONE: 'one',
          TWO: 'two'
        };

        $scope.currertSchedule = $scope.SCHEDULES.ONE;

        $scope.setSchedule = (day)=> {
          switch (day) {
            case $scope.SCHEDULES.ONE:
            {
              $scope.currertSchedule = $scope.SCHEDULES.ONE;
              break;
            }
            case $scope.SCHEDULES.TWO:
            {
              $scope.currertSchedule = $scope.SCHEDULES.TWO;
              break;
            }
          }
        };
      }
    });
  });
}