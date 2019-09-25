export default function (module) {
  module.factory('FitnessTicket', function ($modal) {
    return ({
      open: function (ticketId, eventId) {
        if ((typeof  ticketId !== 'string' && typeof  ticketId !== 'number') || typeof eventId !== 'number') {
          return;
        }
        $modal
          .open({
            template: `
                <div class="widget-modal">
                <div class="modal-header">
                  <button type="button" class="close" ng-click="close()" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                  <div id="2event_tickets_widget"></div>
                </div>
              `,
            size: 'md',
            windowClass: 'widget-modal',
            animate: true,
            controller: function ($scope, $modalInstance) {
              $scope.close = $modalInstance.close;
            }
          })
          .opened
          .then(function () {

            window.widgetOptions = {bg_color: 'fcfcfc', id: eventId, tickets_type: [ticketId], lang: 'uk'};

            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = "https://2event.com/js/widget-tickets.js";
            document.getElementsByTagName('head')[0].appendChild(script);

          });
      }
    });
  });
}