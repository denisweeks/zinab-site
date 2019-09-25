import "./tickets.scss";
import "./widget.scss";

export default function (module) {
  module.directive('fitnessTickets', function (CONVENTION_EVENT_ID) {
    return ({
      templateUrl: require('./tickets.html'),
      controller: function ($scope, TICKETS_ID, FitnessTicket) {
        $scope.CONVENTION_EVENT_ID = CONVENTION_EVENT_ID;
        $scope.TICKETS_ID = TICKETS_ID;
        $scope.openWidget = FitnessTicket.open;
      }
    });
  });
}