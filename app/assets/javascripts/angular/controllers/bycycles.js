var bycycle = angular.module('bycycle_app', ['ui.utils', 'ngRoute', 'servicesApi']);

bycycle.controller('BycyclesController', ['$scope', 'ProcessApi', 'ProcessUpdateApi', '$routeParams',
  function($scope, ProcessApi, ProcessUpdateApi, $routeParams){
    $scope.expression_me = "Bycycle controller Loaded";
    $scope.bind_me = "Force beyond";
    $scope.list_bycycle = ProcessApi.query();
    $scope.bycycleData = {};
    $scope.bycycleData.hero = 'Hero Zero';

    $scope.see_content = function(id_params, element_obj){
      window.alert(id_params + " -> " + element_obj);
    }

    $scope.promo = function(id) {
      $scope.bind_me = id;
      $scope.bycycle_scope = ProcessUpdateApi.get({bycycleId: id});
    };

    $scope.process_update = function(id, brand_params) {
      $scope.bycycle_scope = ProcessUpdateApi.get({bycycleId: id});
      // var bycycle = ProcessUpdateApi.get({bycycleId: id});
      // bycycle.brand = brand_params;
      //bycycle.$update({id: id}, bycycle);

      ProcessUpdateApi.update({id: id, brand: brand_params});

      $scope.bycycle_scope = ProcessUpdateApi.get({bycycleId: id});
      $scope.bind_me_brand = brand_params;
    };

  }
]);

bycycle.directive('getValueElement', function(){
  return function(scope, element, attributes) {
    element.bind("click", function(){
      scope.see_content($(this).attr('id'), $(this).text());
    });
  }
});

bycycle.directive('processValueUpdate', function(){
  return function(scope, element, attributes) {
    element.bind("blur", function(){
      scope.process_update($(this).attr('id'), $(this).text());
    });
  }
});

bycycle.directive('cstEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.cstEnter, {'event': event});
                    });

                    event.preventDefault();
                }
            });
        };
    });
