(function () {
'use strict';

// set angular module, controller and service
angular.module('CheckPhoneNumberApp', [])
.controller('CheckPhoneNumberController', CheckPhoneNumberController)
.service('CheckService', CheckService);

// inject CheckService to controller
CheckPhoneNumberController.$inject = ['CheckService'];
function CheckPhoneNumberController(CheckService) {
  var checkCltr = this;

  // define the phoneNumber variable
  checkCltr.phoneNumber = "";

  // define the message control variables
  checkCltr.isPhone = "";
  checkCltr.notPhone = "";

  // define the check function in controller
  checkCltr.check = function () {

    checkCltr.isPhone = CheckService.check(checkCltr.phoneNumber);
    checkCltr.notPhone = !checkCltr.isPhone;
  }
}


// set the CheckService
function CheckService() {
  var service = this;

  // define the check function in CheckService
  service.check = function (phoneNumber) {
       console.log(result)
       var phoneNum = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
        var result = phoneNum.test(phoneNumber);
         console.log(phoneNumber);
         console.log(result);
        return result;
  };

}

})();
