'use strict';

/**
 * @ngdoc function
 * @name nameAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nameAppApp
 */
angular.module('nameApp')
        .controller('NameCtrl', function ($scope, NameService) {
            $scope.currentName;
            $scope.newName;

            $scope.getName = function () {
                NameService.getName().then(function (response) {
                    $scope.currentName = response.name;
                });
            };

            $scope.setName = function () {
                NameService.setName($scope.newName).then(function (response) {
                    $scope.getName();
                });
            };

            $scope.getName();
        });
