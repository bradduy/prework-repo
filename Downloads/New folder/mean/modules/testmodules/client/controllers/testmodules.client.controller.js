(function () {
  'use strict';

  // Testmodules controller
  angular
    .module('testmodules')
    .controller('TestmodulesController', TestmodulesController);

  TestmodulesController.$inject = ['$scope', '$state', '$window', 'Authentication', 'testmoduleResolve'];

  function TestmodulesController ($scope, $state, $window, Authentication, testmodule) {
    var vm = this;

    vm.authentication = Authentication;
    vm.testmodule = testmodule;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Testmodule
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.testmodule.$remove($state.go('testmodules.list'));
      }
    }

    // Save Testmodule
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.testmoduleForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.testmodule._id) {
        vm.testmodule.$update(successCallback, errorCallback);
      } else {
        vm.testmodule.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('testmodules.view', {
          testmoduleId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
