import './location.scss';

export default function (module) {
  module.directive('fitnessLocation', function () {
      return ({
        templateUrl: require('./location.html'),
        controller: function ($http, $timeout, $scope) {
          var vm = this;

          vm.success = null;
          vm.error = null;

          //vm.presenters = require('../presenter/presenters.json');
          //vm.workshops = require('../workshops/workshops.json');

          vm.formData = {
            name: '',
            email: '',
            message: ''
          };

          vm.sendMessage = function (valid, data) {
            vm.error = null;


            if (valid) {
              $http
                .post('message', data)
                .then(()=> {
                  vm.formData = {
                    name: '',
                    email: '',
                    message: ''
                  };

                  $scope.messageForm.$submitted = false;
                  vm.success = true;

                  $timeout(()=> {
                    vm.success = false;
                  }, 4000);
                })
                .catch((error)=> {
                  $scope.messageForm.$submitted = false;
                  vm.error = error;
                  $timeout(()=> {
                    vm.error = null;
                  }, 4000);
                });
            }
          }
        },
        controllerAs: 'vm'
      });
    })
    .directive('fixmapscroll', function () {
      return function (scope, element) {

        const wrap = $(element);
        const map = wrap.find('#map_canvas1');

        map.addClass('scrolloff');

        wrap.on('click', function () {
          map.removeClass('scrolloff');
        });

        map.mouseleave(function () {
          wrap.addClass('scrolloff');
        });
      }
    });
}