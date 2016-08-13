"use strict";

var app = angular.module('mainModule', []);

app.controller('mainCtrl', function ($scope, storageService) {
    var dummy = [];
    $scope.value = '';
    $scope.editId = 0;
    $scope.editFlag = false;
    $scope.items = storageService.RestoreState();

    if(!angular.isArray($scope.items)){
        storageService.SaveState(dummy);
        $scope.items = storageService.RestoreState();
    }

    $scope.RemoveItem = function (value) {
        angular.forEach($scope.items, function (item, index) {
            if (item.id === value) {
                $scope.items.splice(index, 1);
            }
        });

        storageService.SaveState($scope.items);
    };

    // Edit state
    $scope.EditItem = function (id, value) {
        $scope.editId = id;
        $scope.value = value;
        $scope.editFlag = true;
    };

    // Return to add state
    $scope.GoBack = function(){
        $scope.value = '';
        $scope.editId = 0;
        $scope.editFlag = false;
    }

    // Handler to edit or add on item
    $scope.EditHandler = function () {
        function Edit(){
            angular.forEach($scope.items, function (item, index) {
                if (item.id === $scope.editId) {
                    item.value = $scope.value;
                }
            });
        }

        function Add(){
            $scope.items.push({
                id: GetUniqueId(),
                value: $scope.value
            });
            $scope.value = '';
        };

        $scope.editFlag ? Edit() : Add();

        storageService.SaveState($scope.items);
    };

    // Return unique autoincrement
    function GetUniqueId() {
        var maxId;
        var arrayOfId = [];

        angular.forEach($scope.items, function (item, index) {
            arrayOfId.push(item.id);
        });

        Array.prototype.Max = function () {
            return Math.max.apply(Math, this);
        };

        if(arrayOfId.length > 0){
            maxId = arrayOfId.Max();
        } else maxId = 0;

        return ++maxId;
    };
});
