import './presenter-info.scss';

export default function (module) {
  module.directive('modalInfo', function () {
    return ({
      restrict: 'A',
      bindToController: {
        info: '='
      },
      scope: true,
      controller: function ($scope, $modal) {
        const vm = this;

        $scope.$on('open:modal:info', ()=> {
          if(!vm.info.description || !vm.info.avatar) return;
          $modal
            .open({
              templateUrl: require('./presenter-info.html'),
              controller: function ($modalInstance, info) {
                var vm = this;
                vm.info = info;
                vm.close = $modalInstance.close;
              },
              //animation: true,
              size: 'md',
              controllerAs: 'vm',
              windowClass: 'center-modal',
              resolve: {
                info: ()=> vm.info
              }
            })
            .result
            .then(()=> {
              //console.log('modal close');
            })
            .catch(()=> {
              //console.log('modal dismiss');
            });
        });

      },
      controllerAs: 'vm',
      link: function (scope, element) {
        element.on('click', function () {
          scope.$emit('open:modal:info');
        })
      }
    })
      ;
  })
}