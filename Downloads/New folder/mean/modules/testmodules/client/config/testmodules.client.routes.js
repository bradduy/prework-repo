'use strict';

// Setting up route
angular.module('testmodules').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('testmodules', {
        abstract: true,
        url: '/testmodules',
        template: '<ui-view/>'
      })
      .state('testmodules.list', {
        url: '',
        templateUrl: 'modules/testmodules/client/views/list-testmodules.client.view.html'
      })
      .state('testmodules.create', {
        url: '/create',
        templateUrl: 'modules/testmodules/client/views/create-testmodule.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('testmodules.view', {
        url: '/:articleId',
        templateUrl: 'modules/testmodules/client/views/view-testmodule.client.view.html'
      })
      .state('testmodules.edit', {
        url: '/:articleId/edit',
        templateUrl: 'modules/testmodules/client/views/edit-testmodule.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
