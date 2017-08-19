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

            // Takes each employees annual salary and adds them together, then returns divided by 12(months)
            var monthlySalary = function () {
                self.sum = 0;
                for (var i = 0; i < self.employees.length; i++) {
                    self.sum = self.sum + self.employees[i].annual_salary / 12;
                }
                return self.sum;
            }
            // console.log(monthlySalary());
        });
    }

    // POST function to server side
    self.postEmployees = function () {
        $http({
            method: 'POST',
            url: '/employee',
            data: self.newEmployee
        }).then(function (response) {
            console.log(response);
            self.getEmployees();
            self.newEmployee = {}; // clears the input field after a submission
        })
    };
    self.getEmployees();

}])