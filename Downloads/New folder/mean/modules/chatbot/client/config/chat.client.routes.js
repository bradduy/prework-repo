'use strict';

// Configure the 'chat' module routes
angular.module('chatbot').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('chatbot', {
        url: '/chat',
        templateUrl: 'modules/chat/client/views/chat.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
