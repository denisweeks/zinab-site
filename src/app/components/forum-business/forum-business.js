import './forum-business.scss';

export default function (module) {
  module.directive('forumBusiness', function () {
    return ({
      templateUrl: require('./forum-business.html'),
      scope: true,
      controller: function ($scope) {
        $scope.presenters_forum = require('./business_forum.json');
      }
    });
  });
}