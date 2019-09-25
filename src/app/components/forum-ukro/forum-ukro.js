import './forum-ukro.scss';

export default function (module) {
  module.directive('forumUkro', function () {
    return ({
      templateUrl: require('./forum-ukro.html'),
      scope: true,
      controller: function ($scope) {
        $scope.presenters_forum = require('./ukro_forum.json');
      }
    });
  });
}