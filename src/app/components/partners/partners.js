import './partners.scss';

export default function (module) {
  module.directive('fitnessPartners', function () {
    return ({
      templateUrl: require('./partners.html')
    });
  });
}