class StorageService {

    constructor () {
        this.saveData = function(arr, storageName) {
            if (localStorage.getItem(storageName)) {
                localStorage.removeItem(storageName);
                localStorage.setItem(storageName, angular.toJson(arr));
            } else {
                localStorage.setItem(storageName, angular.toJson(arr));
            }
        };

        this.loadData = function(storageName) {
            var loadData = JSON.parse(localStorage.getItem(storageName));
            return loadData;
        };

        this.removeData = function(storageName) {
            localStorage.removeItem(storageName);
        };

    }

}

export default StorageService;