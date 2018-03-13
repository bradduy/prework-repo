'use strict';

// Configuring the Chat module
angular.module('members').run(['Menus',
  function (Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Forum Members',
      state: 'forum_member',
      position: 8
    });
  }
]);
