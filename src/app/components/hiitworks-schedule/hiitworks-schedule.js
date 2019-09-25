import './hiitworks-schedule.scss';

export default function (module) {
  module.directive('hiitworksSchedule', function () {
    return ({
      templateUrl: require('./hiitworks-schedule.html'),
      scope: true,
      controller: function ($scope) {
        $scope.hiitworksschedule = require('./hiitworks-schedule.json');
        $scope.select = function(id) {
          el = document.getElementById(id);
          if (el)
            window.scroll({behavior: 'smooth', left: 0, top: el.offsetTop});
        }
      }
    });
  });
}