import "./demo-photo.scss";
export default function (module) {
  module
    .directive('demoPhoto', function () {
      return ({
        templateUrl: require('./demo-photo.html')
      });
    });
}