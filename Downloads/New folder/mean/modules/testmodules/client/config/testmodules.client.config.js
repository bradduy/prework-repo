'use strict';

// Configuring the Articles module
angular.module('testmodules').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'TEST',
      state: 'testmodules',
      type: 'dropdown',
      roles: ['*'],
      position: 7
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'testmodules', {
      title: 'TEST',
      state: 'testmodules.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'testmodules', {
      title: 'TEST',
      state: 'testmodules.create',
      roles: ['user']
    });
  }
]);
