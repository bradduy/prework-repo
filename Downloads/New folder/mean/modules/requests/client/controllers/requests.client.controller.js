'use strict';

// Requests controller
angular.module('requests').controller('RequestsController', ['$scope', '$filter', '$stateParams', '$location', 'Authentication', 'Requests',
    function ($scope, $filter, $stateParams, $location, Authentication, Requests) {
      $scope.authentication = Authentication;

        // Create new Request
      $scope.create = function (isValid) {
        $scope.error = null;

        if (!isValid) {
          $scope.$broadcast('show-errors-check-validity', 'requestForm');

          return false;
        }

            // Create new Request object
        var request = new Requests({
          title: this.title,
          content: this.content,
          bounty: this.bounty
        });

            // Redirect after save
        request.$save(function (response) {
          $location.path('requests/' + response._id);

            // Clear form fields
          $scope.title = '';
          $scope.content = '';
          $scope.bounty = '';
        }, function (errorResponse) {
          $scope.error = errorResponse.data.message;
        });
      };

        // Remove existing request
      $scope.remove = function (request) {
        if (request) {
          request.$remove();

          for (var i in $scope.requests) {
            if ($scope.requests[i] === request) {
              $scope.requests.splice(i, 1);
            }
          }
        } else {
          $scope.request.$remove(function () {
            $location.path('requests');
          });
        }
      };

        // Update existing request
      $scope.update = function (isValid) {
        $scope.error = null;

        if (!isValid) {
          $scope.$broadcast('show-errors-check-validity', 'requestForm');

          return false;
        }

        var request = $scope.request;

        request.$update(function () {
          $location.path('requests/' + request._id);
        }, function (errorResponse) {
          $scope.error = errorResponse.data.message;
        });
      };

        // Find a list of Requests
      $scope.find = function () {
        $scope.requests = Requests.query();
      };

      // Find existing request
      $scope.findOne = function () {
        $scope.request = Requests.get({
          requestId: $stateParams.requestId
        });
      };

    }
]);
