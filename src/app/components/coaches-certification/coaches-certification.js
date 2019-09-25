import './coaches-certification.scss';

export default function (module) {
  module.directive('coachesCertification', function () {
    return ({
      templateUrl: require('./coaches-certification.html')
    });
  });
}