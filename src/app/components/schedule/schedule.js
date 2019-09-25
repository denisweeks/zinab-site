import './schedule.scss';

export default function (module) {
  module.directive('fitnessSchedule', function () {
    return ({
      templateUrl: require('./schedule.html'),
      scope: true,
      controller: function ($scope) {
        $scope.dayone = require('./day_one.json');
        $scope.daytwo = require('./day_two.json');

        const vm = this;

        vm.SCHEDULES = {
          ONE: 'one',
          TWO: 'two'
        };

        vm.currertSchedule = vm.SCHEDULES.ONE;

        vm.setSchedule = (day)=> {
          switch (day) {
            case vm.SCHEDULES.ONE: {
              vm.currertSchedule = vm.SCHEDULES.ONE;
              break;
            }
            case vm.SCHEDULES.TWO: {
              vm.currertSchedule = vm.SCHEDULES.TWO;
              break;
            }
          }
        };

      },
      controllerAs: 'schedule'
    });
  });
}