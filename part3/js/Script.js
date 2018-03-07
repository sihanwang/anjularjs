/// <reference path="../../angularjs/angular.js"" />

var myApp= angular.module("myModule", []);

var myController = function($scope) {
    var employee ={
        firstName:"David",
        lastName:"Hastings",
        gender:"Male"

    };
    $scope.employee=employee;
};

myApp.controller("myController", myController);

//mathod chaining: var myApp= angular.module("myModule", []).controller("myController", myController);