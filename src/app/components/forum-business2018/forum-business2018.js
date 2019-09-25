import './forum-business2018.scss';

export default function (module) {
  module.directive('forumBusiness2018', function () {
    return ({
      templateUrl: require('./forum-business2018.html'),
      scope: true,
      controller: function ($scope) {
        $scope.presenters_forum = require('./business_forum2018.json');
      }
    });
  });
}