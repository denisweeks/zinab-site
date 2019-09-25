import './zumba-schedule.scss';

export default function (module) {
  module.directive('zumbaSchedule', function () {
    return ({
      templateUrl: require('./zumba-schedule.html'),
      scope: true,
      controller: function ($scope) {
        $scope.zumbaschedule = require('./zumba-schedule.json');
        $scope.select = function(id) {
          el = document.getElementById(id);
          if (el)
            window.scroll({behavior: 'smooth', left: 0, top: el.offsetTop});
        }
      }
    });
  });
}