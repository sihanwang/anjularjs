/// <reference path="../../angularjs/angular.js"" />

var myApp= angular.module("myModule", []);

var myController = function($scope) {
    var country ={
        name:"China",
        capital:"Beijing",
        flag:"image/flag.jpg"

    };
    $scope.country=country;
};

myApp.controller("myController", myController);

//mathod chaining: var myApp= angular.module("myModule", []).controller("myController", myController);