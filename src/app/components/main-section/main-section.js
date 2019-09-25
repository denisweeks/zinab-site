import "./main-section.scss";
export default function (module) {
  module.directive('mainSection', function () {
    return ({
      templateUrl: require('./main-section.html')
    });
  })
}