import "./forum-workshop.scss";

export default function (module) {
  module.directive('forumWorkshop', function () {
    return ({
      templateUrl: require('./forum-workshop.html'),
      scope: true,
      controller: function ($scope, FitnessTicket, FORUM_EVENT_ID) {
        $scope.workshops = require('./workshops_forum.json');
        $scope.openWidget = FitnessTicket.open;
        $scope.FORUM_EVENT_ID = FORUM_EVENT_ID;
      }
    });
  });
}