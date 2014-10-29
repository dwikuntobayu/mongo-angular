var servicesApi = angular.module('servicesApi', ['ngResource']);

servicesApi.factory('ProcessApi', ['$resource',
  function($resource){
    return $resource('http://0.0.0.0:3000/api/angularbycycles?offset=:valueOffset&limit=:valueLimit', {}, {
      query: {method: 'GET', params:{valueOffset: '0', valueLimit: '6'}}
    });
  }
]);

servicesApi.factory('ProcessUpdateApi', ['$resource',
  function($resource){
    return $resource('http://0.0.0.0:3000/api/angularbycycles/:bycycleId', {}, {
      update: {method: 'PUT', params:{bycycleId: '@id'}}
    });
  }
]);
