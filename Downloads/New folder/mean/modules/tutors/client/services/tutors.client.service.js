'use strict';

angular.module('tutors').factory('Tutors', ['$resource',
  function ($resource) {
    return $resource('api/tutors/:tutorId', {
      tutorId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
