import './nav-menu.scss';
export default function (module) {
  module.directive('navMenu', function () {
    return ({
      templateUrl: require('./nav-menu.html')
    });
  });
}