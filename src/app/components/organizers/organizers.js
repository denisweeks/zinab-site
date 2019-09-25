import "./organizers.scss";
export default function (module) {
  module.directive('fitnessOrganizers', function () {
    return ({
      templateUrl: require('./organizers.html')
    });
  });
}