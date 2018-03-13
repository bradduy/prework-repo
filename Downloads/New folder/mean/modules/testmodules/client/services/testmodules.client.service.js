// Testmodules service used to communicate Testmodules REST endpoints
(function () {
  'use strict';

  angular
    .module('testmodules')
    .factory('TestmodulesService', TestmodulesService);

  TestmodulesService.$inject = ['$resource'];

  function TestmodulesService($resource) {
    return $resource('api/testmodules/:testmoduleId', {
      testmoduleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
}());
