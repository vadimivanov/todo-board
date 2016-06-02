class StorageService {

    constructor () {
        this.saveData = function(arr, storageName) {
            if (localStorage.getItem(storageName)) {
                // var load = localStorage.getItem(storageName);
                // var parseLoad = JSON.parse(load);
                // console.log('StorageService', arr, storageName );
                // parseLoad.push(arr[0]);
                localStorage.removeItem(storageName);
                localStorage.setItem(storageName, angular.toJson(arr));
            } else {
                localStorage.setItem(storageName, angular.toJson(arr));
            }
        };

        this.loadData = function(storageName) {
            var loadData = JSON.parse(localStorage.getItem(storageName));
            console.log('loadData  ', loadData ,storageName);
            return loadData;
        };

        this.removeData = function(storageName) {
            localStorage.removeItem(storageName);
        };

    }

}

export default StorageService;