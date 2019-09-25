import './mindbody-schedule.scss';

export default function (module) {
  module.directive('mindbodySchedule', function () {
    return ({
      templateUrl: require('./mindbody-schedule.html'),
      scope: true,
      controller: function ($scope) {
        $scope.mindbodyschedule = require('./mindbody-schedule.json');
          $scope.select = function(id) {
              el = document.getElementById(id);
              if (el)
                  window.scroll({behavior: 'smooth', left: 0, top: el.offsetTop});
          }
      }
    });
  });
}