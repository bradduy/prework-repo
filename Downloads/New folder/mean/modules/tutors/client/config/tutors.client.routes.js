'use strict';

// Setting up route
angular.module('tutors').config(['$stateProvider',
  function ($stateProvider) {
    // Tutors state routing
    $stateProvider
      .state('tutors', {
        abstract: true,
        url: '/tutors',
        template: '<ui-view/>'
      })
      .state('tutors.list', {
        url: '',
        templateUrl: 'modules/tutors/client/views/list-tutors.client.view.html'
      })
      .state('tutors.listcourse', {
        url: '/listcourse',
        templateUrl: 'modules/tutors/client/views/list-course.client.view.html'
      })
      .state('tutors.mycourse', {
        url: '/mycourse',
        templateUrl: 'modules/tutors/client/views/my-course.client.view.html'
      })
      .state('tutors.createoffer', {
        url: '/createoffer',
        templateUrl: 'modules/tutors/client/views/create-course.client.view.html',
        data: {
          roles: ['tutor']
        }
      })
      .state('tutors.setschedule', {
        url: '/setschedule',
        templateUrl: 'modules/tutors/client/views/schedule-setting.client.view.html',
        data: {
          roles: ['tutor']
        }
      })
      .state('tutors.mytutorprofile', {
        url: '/tutorprofile',
        templateUrl: 'modules/tutors/client/views/view-tutor.client.view.html',
        data: {
          roles: ['tutor']
        }
      })
      .state('tutors.register', {
        url: '/register',
        templateUrl: 'modules/tutors/client/views/register-tutor.client.view.html',
        data: {
          roles: ['user']
        }
      })
      .state('tutors.register_success', {
        url: '/register_success',
        templateUrl: 'modules/tutors/client/views/register-success.client.view.html',
        data: {
          roles: ['user']
        }
      });
  }
]);
