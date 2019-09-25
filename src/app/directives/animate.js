export default function (module) {
  module.directive('animate', function () {
    return ({
      restrict: 'A',
      link: function ($scope, $element, $attr) {
        //console.log('TEST TEST');
        //$element.waypoint(function () {
        //  console.log('this', this);
        //});

        //$($element).waypoint(function () {
        //$(this).toggleClass('active');
        //$(this).toggleClass('animated fadeInLeft');
        //}, {offset: '100%'});
      }
    });
  });
}