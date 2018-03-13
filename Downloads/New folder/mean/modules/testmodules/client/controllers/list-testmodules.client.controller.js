(function () {
  'use strict';

  angular
    .module('testmodules')
    .controller('TestmodulesListController', TestmodulesListController);

  TestmodulesListController.$inject = ['TestmodulesService'];

  function TestmodulesListController(TestmodulesService) {
    var vm = this;

    vm.testmodules = TestmodulesService.query();
  }
}());
