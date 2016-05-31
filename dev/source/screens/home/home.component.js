let templateHome = require('./home.html');

class HomeController {
    constructor($scope, PubSub, BoardService, BoardFactory, StorageService) {
        var ctrl = this;
        this.loadBoard = StorageService.loadData('ToDoBoard');
        this.kanbanBoard = this.loadBoard || BoardService.kanbanBoard(BoardFactory.kanban);
        this.visible = false;
            console.log('loadBoard ', this.loadBoard);

        this.kanbanSortOptions = {
            itemMoved: function (event) {
                event.source.itemScope.modelValue.status = event.dest.sortableScope.$parent.column.name;
                BoardService.addNewCard({board: ctrl.kanbanBoard, title: ctrl.title, column: {name: ctrl.column}, details: ctrl.details});
            },
            orderChanged: function (event) {
            },
            containment: '#board'
        };

        this.removeCard = function (column, card) {
            BoardService.removeCard(this.kanbanBoard, column, card);
        };

        this.addNewCard = function (column) {
            this.visible = true;
        };
       
    }
}

const HomeComponent = {
    template: templateHome,

    controller: HomeController
};
console.log('HomeComponent --- ', HomeComponent);
HomeController.$inject = ['$scope', 'PubSub', 'BoardService', 'BoardFactory', 'StorageService'];

export default HomeComponent;