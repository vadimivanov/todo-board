let templateHome = require('./home.html');

class HomeController {
    constructor($state, BoardService, BoardFactory, StorageService) {
        this.projectName = '';
        // this.projectsList = [];

        this.createProject = function () {
            this.projectsList.push({name: this.projectName});
            StorageService.saveData(this.projectsList, 'projectsList');
            this.loadList();
        };
        
        this.loadList = function () {
            this.projectsList = StorageService.loadData('projectsList') || [];
            console.log('this.projectsList', this.projectsList);
        };        
        
        this.route = function (name) {
            $state.go('board', {directory: name});
            BoardService.setDir(name);
        };
        this.loadList();
    }
}

const HomeComponent = {
    template: templateHome,

    controller: HomeController
};

HomeController.$inject = ['$state', 'BoardService', 'BoardFactory', 'StorageService'];
export default HomeComponent;