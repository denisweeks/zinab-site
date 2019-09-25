import "./workshop.scss";

export default function (module) {
    module.directive('hiitworksWorkshops', function () {
        return ({
            scope: true,
            template: `
        <section id="hiitworks-workshops">
          <div class="container-fluid">
            <div class="section-heading scrollpoint sp-effect3">
              <h1>Семінари</h1>
              <!--div class="section-heading">
                <p> Реєстрація 06.10 з 13:00, 7.10.17 з 7:00 та 8.10.17 з 8:00. Виставковий центр "Південний EXPO" </p>
              </div>
              <div class="divider"></div-->
              <!--<p>Розклад семінарів уточнюється</p>-->
              <p>Після проходження семінару всім учасникам видається сертифікат LVIV FITNESS WEEKEND</p>
              <div class="divider"></div>
              <!--p>До уваги учасникiв конвенцiї i семiнарiв!<br>
              Всi продажi є остаточними та поверненню не пiдлягають.</p-->
            </div>
  
            <div class="row">
            <div ng-repeat="workshop in workshops">
                <a id="{{workshop.id}}"></a>
              <div class="col-lg-6 col-md-6 col-xs-12 scrollpoint sp-effect5 workshop">
                  <h3 class="workshop-name" ng-bind-html="workshop.name"></h3>
                <div class="row">
                  <div class="col-md-4">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 lecture hover-affect" modal-info info="lecture"
                           ng-class="{
                                      'col-xs-12': workshop.lecturers.length === 1,
                                      'col-xs-6': workshop.lecturers.length === 2,
                                      'col-xs-4': workshop.lecturers.length === 3
                                      }" ng-repeat="lecture in workshop.lecturers">
                        <img ng-if="lecture.avatar" ng-src="{{lecture.avatar}}" alt="{{lecture.firstName + ' ' + lecture.lastName}}" class="{{workshop.id_type=='hiit'?'img-hiit':''}}">
                        <h3 class="lecture-name">{{lecture.firstName }} <br ng-if="lecture.two">  {{ lecture.lastName}}</h3>
                        <h2 class="lecture-country">{{ lecture.country }}</h2>
                        <!--div class="text-center" ng-if="workshop.socialLinks.length > 0">
                          <a ng-href="{{ s.link }}" ng-show="s.link" target="_blank" class="fa la-lg social-icon" ng-repeat="s in workshop.socialLinks" ng-class="s.icon"></a>
                        </div-->
                      </div>
                    </div>
                  </div>
  
                  <div class="col-md-8 workshop-desc">
                    <div class="ticket-closed" style="border: 1px solid #ff0000;color: #ff0000;height: 100%;text-align: center;font-weight: bold;margin-bottom:10px;padding: 10px 0;"
                    ng-if="workshop.closed === 1">
                        Електронний продаж квитків закрито.<br>
                        Зареєструватись на семінар можна на місці проведення перед початком семінару.
                    </div>
                  
                    <div>
                      <p class="workshop-price" ng-if="workshop.title" ng-bind-html="workshop.title"></p>
                      <p class="inline">Дата: {{ workshop.date_info.date }}</p>
                      <p class="inline">Час: {{ workshop.date_info.time.start }}-{{ workshop.date_info.time.end }}</p><br>
                      <p class="inline">Тривалість: {{ workshop.duration }}</p><br>
                      <p class="inline" ng-show="workshop.people">Кількість учасників обмежена: ({{ workshop.people }} чоловік)</p>
                    </div>
                    <p>Локація: <span ng-bind-html="workshop.location"></span></p>
                    <div ng-if="workshop.price">
                        <p class="workshop-price">Вартість: {{ workshop.price }} <span ng-show="workshop.price"><span ng-if="workshop.currency">{{ workshop.currency }}</span><span ng-if="!workshop.currency">грн</span></span><span ng-if="workshop.price_text.length > 0"> - {{ workshop.price_text }}</span></p>
                    </div>
                    <div ng-if="workshop.type">
                        <p class="workshop-price">Тип: {{ workshop.type }}</p>
                    </div>
                    <p class="description" ng-text-truncate="workshop.description"
                       ng-tt-chars-threshold="160"
                       ng-tt-more-label="Читати повністю"
                       ng-tt-less-label="Сховати"></p>
                  </div>
                  
                  <div class="pull-right" ng-if="!workshop.discount && !workshop.btn_link">
                   <button type="button" class="btn btn-primary btn-lg {{!item.btn_link?'disabled':''}}" ng-click="" ng-if="workshop.closed != 1">
                     <span>Реєстрація</span>
                     <!--span ng-if="workshop.price">Квиток</span-->
                     </button>
                  </div>
                  <div class="pull-right" ng-if="!workshop.discount && workshop.btn_link">
                    <button type="button"  class="btn btn-primary btn-lg">
                     <span><a class="workshop-btn" target="_blank" href="{{workshop.btn_link}}">Реєстрація</a>
                     </button>
                  </div>
                  
                  <div class="clearfix"></div>
                  
                  <div class="col-md-8 workshop-desc" ng-if="workshop.date_info_2" style="float:right;margin-top:20px;">
                    <div class="ticket-closed" style="border: 1px solid #ff0000;color: #ff0000;height: 100%;text-align: center;font-weight: bold;margin-bottom:10px;padding: 10px 0;"
                    ng-if="workshop.closed_2 === 1">
                        Електронний продаж квитків закрито.<br>
                        Зареєструватись на семінар можна на місці проведення перед початком семінару.
                    </div>
                  
                    <div>
                      <p class="workshop-price" ng-if="workshop.title_2" ng-bind-html="workshop.title_2"></p>
                      <p class="inline">Дата: {{ workshop.date_info_2.date }}</p>
                      <p class="inline">Час: {{ workshop.date_info_2.time.start }}-{{ workshop.date_info_2.time.end }}</p><br>
                      <p class="inline">Тривалість: {{ workshop.duration_2 }}</p><br>
                      <p class="inline" ng-show="workshop.people">Кількість учасників обмежена: ({{ workshop.people }} чоловік)</p>
                    </div>
                    <p>Локація: {{ workshop.location_2 }}</p>
                    <div ng-if="!workshop.price2">
                        <p class="workshop-price">Вартість: {{ workshop.price_2 }} <span ng-show="workshop.price_2">грн</span><span ng-if="workshop.price_text.length > 0"> - {{ workshop.price_text }}</span></p>
                    </div>
                    <div ng-if="workshop.price2">
                        <p class="workshop-price">Вартість:</p>
                        <p class="workshop-price">{{ workshop.price_2 }} <span ng-show="!workshop.price_2.length">грн</span><span ng-if="workshop.price_text.length > 0"> - {{ workshop.price_text }}</span></p>
                        <p class="workshop-price" ng-if="workshop.price2">{{ workshop.price2 }} <span ng-show="!workshop.price2.length">грн</span><span ng-if="workshop.price2_text.length > 0"> - {{ workshop.price2_text }}</span></p>
                    </div>
                    <p class="description" ng-text-truncate="workshop.description_2"
                       ng-tt-chars-threshold="160"
                       ng-tt-more-label="Читати повністю"
                       ng-tt-less-label="Сховати"></p>
                  </div>
                </div>
                
                <!--div class="pull-right" ng-if="workshop.event_id_2">
                   <button type="button"  class="btn btn-primary btn-lg"
                     ng-click="openWidget(workshop.ticket_id_2, workshop.event_id_2)" ng-if="workshop.closed_2 != 1">
                     <span ng-if="!workshop.price_2">Реєстрація</span>
                     <span ng-if="workshop.price_2">Квиток</span>
                     </button>
                  </div-->
                  
                  <div class="clearfix"></div>
                  
                  <div style="float:right" ng-if="workshop.discount">
                    <div class="workshop-price" style="margin:20px 0 20px 0;">{{ workshop.discount }}</div>
                    <div class="clearfix"></div>
                    <div class="pull-right">
                   <button type="button"  class="btn btn-primary btn-lg"
                     ng-click="openWidget(workshop.ticket_id, workshop.event_id)" ng-if="workshop.closed != 1">
                     <span ng-if="!workshop.price">Реєстрація</span>
                     <span ng-if="workshop.price">Квиток</span>
                     </button>
                  </div>
                  </div>
                
              </div>
              <div ng-if="$odd" style="clear: both;"></div>
              </div>
            </div>
          </div>
        </section>
      `,
            controller: function ($scope, FitnessTicket, SEMINAR_EVENT_ID) {
                $scope.workshops = require('./workshops.json');
                $scope.openWidget = FitnessTicket.open;
                $scope.SEMINAR_EVENT_ID = SEMINAR_EVENT_ID;
            }
        });
    });
}