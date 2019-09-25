import "./forum-utro-tickets.scss";

export default function (module) {
  module.directive('forumUtroTickets', function () {
    return ({
      templateUrl: require('./forum-utro-tickets.html'),
      scope: true,
      controller: function ($scope, FitnessTicket, FORUM_UTRO_EVENT_ID, FORUM_UTRO_TICKET_IDS) {
        $scope.FORUM_UTRO_EVENT_ID = FORUM_UTRO_EVENT_ID;

        $scope.FORUM_UTRO_TICKET_IDS = FORUM_UTRO_TICKET_IDS;
        $scope.openWidget = FitnessTicket.open;
      }
    });
  });
}