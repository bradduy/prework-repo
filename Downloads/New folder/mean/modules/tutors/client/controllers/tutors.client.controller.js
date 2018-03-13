'use strict';

// tutors controller
angular.module('tutors').controller('TutorsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Tutors',
    function ($scope, $stateParams, $location, Authentication, Tutors) {
      $scope.authentication = Authentication;

        // Create new tutor
      $scope.create = function (isValid) {
        $scope.error = null;

        if (!isValid) {
          $scope.$broadcast('show-errors-check-validity', 'tutorForm');

          return false;
        }

            // Create new tutor object
        var tutor = new Tutors({
          title: this.title,
          content: this.content,
          bounty: this.bounty
        });

            // Redirect after save
        tutor.$save(function (response) {
          $location.path('tutors/' + response._id);

            // Clear form fields
          $scope.title = '';
          $scope.content = '';
          $scope.bounty = '';
        }, function (errorResponse) {
          $scope.error = errorResponse.data.message;
        });
      };

        // Remove existing tutor
      $scope.remove = function (tutor) {
        if (tutor) {
          tutor.$remove();

          for (var i in $scope.tutors) {
            if ($scope.tutors[i] === tutor) {
              $scope.tutors.splice(i, 1);
            }
          }
        } else {
          $scope.tutor.$remove(function () {
            $location.path('tutors');
          });
        }
      };

        // Update existing tutor
      $scope.update = function (isValid) {
        $scope.error = null;

        if (!isValid) {
          $scope.$broadcast('show-errors-check-validity', 'tutorForm');

          return false;
        }

        var tutor = $scope.tutor;

        tutor.$update(function () {
          $location.path('tutors/' + tutor._id);
        }, function (errorResponse) {
          $scope.error = errorResponse.data.message;
        });
      };

        // Find a list of Tutors
      $scope.find = function () {
        $scope.tutors = Tutors.query();
       
      };

      // Find existing tutor
      $scope.findOne = function () {
        $scope.tutor = Tutors.get({
          tutorId: $stateParams.tutorId
        });
      };

      // Create a tutor registration
      $scope.createTutorRegis = function (isValid) {
        $scope.error = null;

        if (!isValid) {
          $scope.$broadcast('show-errors-check-validity', 'tutor_regisForm');

          return false;
        }

            // Create new tutor object
        var tutor = new Tutors({
          specialtyDesc: this.specialtyDesc,
          intro_words: this.intro_words
        });

            // Redirect after save
        tutor.$save(function (response) {
          $location.path('tutors/register_success');

            // Clear form fields
          $scope.specialtyDesc = '';
          $scope.intro_words = '';

        }, function (errorResponse) {
          $scope.error = errorResponse.data.message;
        });
      };

    }
]);
