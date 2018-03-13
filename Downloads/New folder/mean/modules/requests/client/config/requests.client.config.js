'use strict';

// Configuring the Articles module
angular.module('requests').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Request',
      state: 'requests',
      type: 'dropdown',
      roles: ['*'],
      position: 1
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'requests', {
      title: 'List all requests',
      state: 'requests.list'
    });
    
    Menus.addSubMenuItem('topbar', 'requests', {
      title: 'My requests',
      state: 'requests.myreq',
      roles: ['user']
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'requests', {
      title: 'Make new request',
      state: 'requests.create',
      roles: ['user']
    });
  }
]);
