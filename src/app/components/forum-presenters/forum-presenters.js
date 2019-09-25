import './forum-presenters.scss';

export default function (module) {
  module.directive('forumPresenter', function () {
    return ({
      templateUrl: require('./forum-presenters.html'),
      scope: true,
      controller: function ($scope) {
        $scope.presenters_forum = require('./presenters_forum.json');
      }
    });
  });
}