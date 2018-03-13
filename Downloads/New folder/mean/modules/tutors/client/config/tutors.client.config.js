'use strict';

// Configuring the Articles module
angular.module('tutors').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Tutor',
      state: 'tutors',
      type: 'dropdown',
      roles: ['*'],
      position: 2
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'tutors', {
      title: 'List all Tutors',
      state: 'tutors.list'
    });

    Menus.addSubMenuItem('topbar', 'tutors', {
      title: 'List Course offers',
      state: 'tutors.listcourse'
    });
    Menus.addSubMenuItem('topbar', 'tutors', {
      title: 'My offers',
      state: 'tutors.mycourse',
      roles: ['tutor','user']
    });
    Menus.addSubMenuItem('topbar', 'tutors', {
      title: 'Create a new Course offer',
      state: 'tutors.createoffer',
      roles: ['tutor']
    });
    Menus.addSubMenuItem('topbar', 'tutors', {
      title: 'Become a Tutor',
      state: 'tutors.register',
      roles: ['user']
    });
    Menus.addSubMenuItem('topbar', 'tutors', {
      title: 'My Tutor Profile',
      state: 'tutors.mytutorprofile',
      roles: ['tutor']
    });
    Menus.addSubMenuItem('topbar', 'tutors', {
      title: 'Setting my Schedule',
      state: 'tutors.setschedule',
      roles: ['tutor']
    });
  }
]);
