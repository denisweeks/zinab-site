import "./demo-video.scss";
export default function (module) {
  module
    .directive('demoVideo', function () {
      return ({
        templateUrl: require('./demo-video.html')
      });
    });
}