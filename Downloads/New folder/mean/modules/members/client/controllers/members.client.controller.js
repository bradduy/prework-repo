'use strict';

angular.module('members').controller('MembersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Members',
    function ($scope, $stateParams, $location, Authentication, Members) {
      $scope.authentication = Authentication;

        // Find a list of Articles
      $scope.find = function () {
        $scope.members = Members.query();
        console.log($scope.members);
      };

        // Find existing Article
      $scope.findOne = function () {
        $scope.member = Members.get({
          memberId: $stateParams.memberId
        });
      };

      
    }
]);
