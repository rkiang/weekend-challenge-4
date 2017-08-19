var app = angular.module('EmployeeApp', []);
console.log('client.js is sourced in');

app.controller('EmployeeController', ['$http', function ($http) {
    console.log('Employee Controller has been loaded');
    var self = this;
    self.employees = [];


    // GET from server side
    self.getEmployees = function () {
        $http({
            method: 'GET',
            url: '/employee'
        }).then(function (response) {
            console.log(response);
            console.log(response.data);
            self.employees = response.data;
        });
    }

    // POST function to server side
    self.postEmployees = function () {
        $http({
            method: 'POST',
            url: '/employee',
            data: self.newEmployee
        }).then(function(response){
            console.log(response);
            self.getEmployees();
        })  
      };
    self.getEmployees();

}])