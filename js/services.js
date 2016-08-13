app.service('storageService', function () {

    this.SaveState = function (data) {
        localStorage.storageService = angular.toJson(data);
    };

    this.RestoreState = function () {
        return angular.fromJson(localStorage.storageService);
    }

});