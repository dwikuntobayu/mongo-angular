var bycycle = angular.module('bycycle_app', ['ui.utils', 'ngRoute', 'servicesApi']);

bycycle.controller('BycyclesController', ['$scope', 'ProcessApi', 'ProcessUpdateApi', '$routeParams',
  function($scope, ProcessApi, ProcessUpdateApi, $routeParams){
    $scope.expression_me = "Bycycle controller Loaded";
    $scope.bind_me = "Force beyond";
    $scope.list_bycycle = ProcessApi.query();

    $scope.promo = function(id) {
      $scope.bind_me = id;
      $scope.bycycle_scope = ProcessUpdateApi.get({bycycleId: id});
    };

    $scope.process_update = function(id, brand_params) {
      $scope.bycycle_scope = ProcessUpdateApi.get({bycycleId: id});
      var bycycle = ProcessUpdateApi.get({bycycleId: id});
      bycycle.brand = brand_params;

      //bycycle.$update({id: id}, bycycle);

      ProcessUpdateApi.update({id: id, brand: brand_params});

      $scope.bycycle_scope = ProcessUpdateApi.get({bycycleId: id});
      $scope.bind_me_brand = brand_params;
    };

  }
]);

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
