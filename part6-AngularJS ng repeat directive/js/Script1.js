/// <reference path="../../angularjs/angular.js"" />

var myApp = angular.module("myModule", []);

var myController = function ($scope) {
    var countries = [
        { name: "UK", cities: [{ name: "London"}, {name: "Manchester"},{name: "Birmingham"}]} ,
        { name: "USA", cities: [{ name: "Los Angeles"}, {name: "Chicago"},{name: "Houston"}]} ,
        { name: "India", cities: [{ name: "Hyderabad"}, {name: "Chennai"},{name: "Mumbai"}]}
    ];

    $scope.countries = countries;
};

myApp.controller("myController", myController);

//mathod chaining: var myApp= angular.module("myModule", []).controller("myController", myController);