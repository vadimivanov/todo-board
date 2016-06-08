class BoardController {
    constructor($state, BoardService, BoardFactory, StorageService) {
        var ctrl = this;
        this.directory = $state.params.directory ||  BoardService.getDir();
        this.loadBoard = StorageService.loadData(this.directory);
        this.kanbanBoard = this.loadBoard || BoardService.kanbanBoard(BoardFactory.kanban);
        this.visible = false;
        console.log('loadBoard ', this.loadBoard,this.directory);
        
        this.kanbanSortOptions = {
            itemMoved: function (event) {
                event.source.itemScope.modelValue.status = event.dest.sortableScope.$parent.column.name;
                BoardService.addNewCard({board: ctrl.kanbanBoard, title: ctrl.title, column: {name: ctrl.column}, details: ctrl.details}, ctrl.directory);
            },
            orderChanged: function (event) {
            },
            containment: '#board'
        };

        this.removeCard = function (column, card) {
            BoardService.removeCard(this.kanbanBoard, column, card, this.directory);
        };

        this.addNewCard = function (column) {
            this.visible = true;
        };

        this.route = function (card) {
            BoardService.setBoard(this.kanbanBoard);
            $state.go('details', {card: card});
        }
    }
}

const BoardComponent = {
    template: require('./board.html'),

    controller: BoardController

};
BoardController.$inject = ['$state', 'BoardService', 'BoardFactory', 'StorageService'];
export default BoardComponent;