import "./after-party.scss";

export default function (module) {
  module.directive('afterParty', function () {
    return ({
      scope: true,
      template: `
        <header id="fashion" class="main-header b-fashion-outer">
  <br><br><br>
  <div class="b-fashion">
    <h1 class="top">LVIV FITNESS WEEKEND<br>OFFICIAL AFTER PARTY</h1>
    <h2>#officialafterparty<br>
    #lovefashionclub</h2>
    <h2>7.10</h2>
    <h3 class="transfer">Preparty start 19:00</h3>
    <h3 class="transfer">Офіційне відкриття о 22:00</h3><br>

    <div class="b-text">
      <h3>Fitness Red Carpet Presentation</h3>
      <h3>Показ від Couture De Fleur</h3>
      <h3>Fitness Party Flash mob</h3><br>
      <h3>dj MALISH DANGEROUS (Kharkivv)<br>
        go go show (Kyiv)<br>
        Mc Pirogov<br>
        Резиденти:<br>
        Seve Clain<br>
        Dancer</h3>

      <h3>зірковий гість: <b>Василь Вірастюк</b></h3>

      <h3>дрес код: fashion sport</h3>
    </div>

    <h3 class="transfer">Локація: м.Львів, пл.Підкови, 1</h3>
    <h3 class="transfer">Вхід - <span class="man">100грн</span>&nbsp;&nbsp;<span class="woman">100грн</span></h3><br>
    <h3 class="transfer">
      <img src="logo-lion.png" class="logo" alt="Lviv Fitness Weekend">&nbsp;
      <img src="fashion_club.png" class="logo" alt="Fashion club">&nbsp;
      <img src="couture_de_fleur.png" class="logo" alt="Couture de fleur">
    </h3>
  </div>
  <br><br>
</header>
      `,
      controller: function ($scope, FitnessTicket, SEMINAR_EVENT_ID) {
        $scope.workshops = require('./after-party.json');
        $scope.openWidget = FitnessTicket.open;
        $scope.SEMINAR_EVENT_ID = SEMINAR_EVENT_ID;
      }
    });
  });
}