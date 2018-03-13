'use strict';

angular.module('members').factory('Members', ['$resource',
  function ($resource) {
    return $resource('api/members/:memberId', {
      memberId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
