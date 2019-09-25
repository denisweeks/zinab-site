import './forum-coaches2018.scss';

export default function (module) {
  module.directive('forumCoaches2018', function () {
    return ({
      templateUrl: require('./forum-coaches2018.html'),
      scope: true,
      controller: function ($scope) {
        $scope.presenters_forum = require('./coaches_forum2018.json');
      }
    });
  });
}