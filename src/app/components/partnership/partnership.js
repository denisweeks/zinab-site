import "./partnership.scss";
export default function (module) {
  module.directive('partnership', function () {
    return ({
      templateUrl: require('./partnership.html'),
      controller: function ($modal) {
        this.showVideo = function () {
          $modal.open({
            template: `
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/NtKssOqxLOE" frameborder="0" allowfullscreen></iframe>
              </div>
            `,
            size: 'lg'
          });
        }
      },
      controllerAs: 'partnership'
    });
  });
}