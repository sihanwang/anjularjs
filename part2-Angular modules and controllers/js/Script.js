/// <reference path="../../angularjs/angular.js"" />

var myApp= angular.module("myModule", []);

var myController = function($scope) {
    $scope.message="AngularJS Tutorial";
};

myApp.controller("myController", myController);