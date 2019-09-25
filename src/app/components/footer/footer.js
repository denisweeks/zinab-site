import './footer.scss';

export default function (module) {
  module.directive('fitnessFooter', function () {
    return ({
      templateUrl: require('./footer.html')
    });
  });
}