this is an web application to check if a phone number is in the right format as (666)666-6666 or 666-666-6666
the app was created in javascript. framework AngularJS was used to realize the  checking function right at the client-side.
boostrap was also used to improve the visual effect.
the check function is located under CheckService in app.js.
to run the application, unzip the file and open the index in a browser.


// define the check function
service.check = function (phoneNumber) {
     var phoneNum = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
      var result = phoneNum.test(phoneNumber);

      return result;
};
