import './forum-schedule.scss';

export default function (module) {
  module.directive('forumSchedule', function () {
    return ({
      templateUrl: require('./forum-schedule.html'),
      scope: true,
      controller: function ($scope) {
        $scope.forumschedule = require('./forum-schedule.json');
      }
    });
  });
}
