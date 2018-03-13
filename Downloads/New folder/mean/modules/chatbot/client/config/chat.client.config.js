'use strict';

// Configuring the Chat module
angular.module('chatbot').run(['Menus',
  function (Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Chatbot for FAQs',
      state: 'chatbot',
      position: 4
    });
  }
]);
