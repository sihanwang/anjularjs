/// <reference path="../../angularjs/angular.js"" />

var myApp = angular.module("myModule", []);

var myController = function ($scope) {
    var employees = [
        { firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000 },
        { firstName: "Jing", lastName: "Wang", gender: "Male", salary: 99999999999999 },
        { firstName: "San", lastName: "Zhang", gender: "Male", salary: 7777777 },
        { firstName: "Si", lastName: "Li", gender: "Male", salary: 66666666 }
    ];

    $scope.employees = employees;
};

myApp.controller("myController", myController);

//mathod chaining: var myApp= angular.module("myModule", []).controller("myController", myController);