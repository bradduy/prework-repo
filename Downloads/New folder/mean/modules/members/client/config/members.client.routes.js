'use strict';

// Configure the 'chat' module routes
angular.module('members').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('forum_member', {
        url: '/members',
        templateUrl: 'modules/members/client/views/list-members.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
