export default function (module) {
  module
    .controller('MainCtrl', function () {

    })
    .config(['$sceProvider', function ($sceProvider) {
      $sceProvider.enabled(false);
    }]);
}
