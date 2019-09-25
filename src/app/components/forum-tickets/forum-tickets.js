import "./forum-tickets.scss";

export default function (module) {
  module.directive('forumTickets', function () {
    return ({
      templateUrl: require('./forum-tickets.html'),
      scope: true,
      controller: function ($scope, FitnessTicket, FORUM_MANAGERS_EVENT_ID, FORUM_MANAGERS_TICKET_IDS) {
        $scope.FORUM_MANAGERS_EVENT_ID = FORUM_MANAGERS_EVENT_ID;

        $scope.FORUM_MANAGERS_TICKET_IDS = FORUM_MANAGERS_TICKET_IDS;
        $scope.openWidget = FitnessTicket.open;
      }
    });
  });
}