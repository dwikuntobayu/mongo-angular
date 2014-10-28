var bycycle = angular.module('bycycle_app', ['ui.utils']);

bycycle.controller('BycyclesController', ['$scope',
  function($scope){
    $scope.expression_me = "Bycycle controller Loaded";
    $scope.bind_me = "Force beyond";

    $scope.promo = function(your_name) {
      $scope.bind_me = your_name;
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
