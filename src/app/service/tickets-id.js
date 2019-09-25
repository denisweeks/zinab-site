export default function (module) {
  module
    .factory('TICKETS_ID', function () {
      return ({
        FITNESS_WEEKEND_FIRST: 41776,
        FITNESS_WEEKEND_SECOND: 41778,
        FITNESS_WEEKEND_TWO_DAYS: 41777
      });
    })
    .factory('FORUM_MANAGERS_TICKET_IDS', function () { // forum tickets
      return ({
        MANAGERS_EVENT_FIRST: 50030,
        MANAGERS_EVENT_SECOND: 50031,
        MANAGERS_EVENT_TWO_DAYS: 52492
      });
    })
    .factory('FORUM_UTRO_TICKET_IDS', function () {
        return ({
            UTRO_EVENT_FIRST: 52496
        });
    })
    .factory('FORUM_EVENT_ID', function () {
      return 936781;
    })
    .factory('FORUM_MANAGERS_EVENT_ID', function () {
      return 1160849;
    })
    .factory('FORUM_UTRO_EVENT_ID', function () {
        return 1160849;
    })
    .factory('CONVENTION_EVENT_ID', function () {
      return 1160849;
    })
    .factory('SEMINAR_EVENT_ID', function () {
      return 1159594;
    });
}