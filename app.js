(function () {
'use strict';

angular.module('CheckPhoneNumberApp', [])
.controller('CheckPhoneNumberController', CheckPhoneNumberController)


CheckPhoneNumberController.$inject = ['CheckService'];
function CheckPhoneNumberController(CheckService) {
  var checkCltr = this;

  checkCltr.phoneNumber = "";
  checkCltr.ifPhone = "";

  checkCltr.check = function () {
    CheckService.check(checkCltr.phoneNumber, checkCltr.ifPhone);
  }
}



function CheckService() {
  var service = this;
  
  service.check = function (phoneNumber, result) {
          
       var phoneNum = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/; 
        var result = phoneNum.test(phoneNumber);
        
        return result;
  };

}

})();





