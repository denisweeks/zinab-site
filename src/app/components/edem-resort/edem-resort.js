import "./edem-resort.scss";

export default function (module) {
  module.directive('edemResort', function () {
    return ({
      scope: true,
      template: `
        <header id="detox" class="main-header b-edem-outer">
    <br>
    <div class="b-edem">
        <h1><b>Detox-тренування</b> у<br>Edem Resort Medical & SPA</h1>
        <h1>разом з Lviv Fitness Weekend</h1>
        <h2>8.10, 9:30-21:00</h2>

        <div class="b-text">
            <h3>Екскурсія мальовничим комплексом та у Edem Golf Club</h3>
            <h3>Functional training від Василя Вірастюка, Сергія Конюшка та Анни Лащук</h3>
            <h3>Yoga- тренування на SUP boards</h3>
            <h3>Detox-коктель у перерві</h3>
            <h3>Detox-обід та презентація від шеф-повара Артура Туманяна фітнес-меню</h3><br>

            <h3>Релаксація у SPA-зоні (басейн, користування римською лазнею, фінською сауною, руською баньою, кріслами хамам,
                доріжкою Кнейпа, циркулярним душем, душем вражень, тренажерним залом, залом йоги та пілатесу, залом кінезису, джакузі)</h3><br>

            <h3>Додаткові послуги:<br>
                масаж<br>
                індивідуальне тренування з гольфу<br>
                косметологічні процедури
            </h3>
        </div><br>

        <h3 class="transfer">Трансфер до Edem Resort Medical & SPA організовано.<br>
            площа Петрушевича -<br>Edem Resort Medical & SPA -<br>площа Петрушевича</h3>

        <h2>Реєстрація: за телефоном 067 900 59 70</h2>
        <h3 class="transfer">Кількість місць обмежена</h3><br>
        <h3 class="transfer">
            <img src="logo-lion.png" class="logo" alt="Lviv Fitness Weekend">&nbsp;
            <img src="edem_resort.png" class="logo" alt="Edem Resort Medical & SPA" style="width:180px;">
        </h3>
        <!--h3 class="transfer"><button class="pricing__action" ng-click="openWidget('',1012198)">Придбати квиток</button></h3-->
    </div>
</header>
      `,
      controller: function ($scope, FitnessTicket, SEMINAR_EVENT_ID) {
        $scope.workshops = require('./edem-resort.json');
        $scope.openWidget = FitnessTicket.open;
        $scope.SEMINAR_EVENT_ID = SEMINAR_EVENT_ID;
      }
    });
  });
}