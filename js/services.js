app.service('storageService', function () {
    this.SaveState = function (data) {
        localStorage.storageService = angular.toJson(data);
    };

    this.RestoreState = function () {
        var storage = angular.fromJson(localStorage.storageService)
        if(storage === undefined){
            storage = [];
        }
        return storage;
    };
});
