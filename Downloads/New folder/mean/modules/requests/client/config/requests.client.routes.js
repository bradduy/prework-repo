'use strict';

// Setting up route
angular.module('requests').config(['$stateProvider',
  function ($stateProvider) {
    // Tutors state routing
    $stateProvider
      .state('requests', {
        abstract: true,
        url: '/requests',
        template: '<ui-view/>'
      })
      .state('requests.list', {
        url: '',
        templateUrl: 'modules/requests/client/views/list-requests.client.view.html'
      })
      .state('requests.myreq', {
        url: '/myreq',
        templateUrl: 'modules/requests/client/views/view-my-request.client.view.html'
      })
      .state('requests.create', {
        url: '/create',
        templateUrl: 'modules/requests/client/views/create-request.client.view.html',
        data: {
          roles: ['user', 'admin','tutor']
        }
      })
      .state('requests.view', {
        url: '/:requestId',
        templateUrl: 'modules/requests/client/views/view-request.client.view.html'
      })
      .state('requests.edit', {
        url: '/:requestId/edit',
        templateUrl: 'modules/requests/client/views/edit-request.client.view.html'
      });
  }
]);
