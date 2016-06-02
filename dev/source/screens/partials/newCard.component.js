let templateNewCard = require('./newCard.html');

class NewCardController {
    constructor($scope, PubSub, BoardService) {
        
        this.columnName = 'ooooo';
        this.column = 'Ideas';
        this.title = '';
        this.details = '';
        
        this.addNewCard = function () {
            BoardService.addNewCard({board: this.kanbanBoard, title: this.title, column: {name: this.column}, details: this.details}, this.directoryBoard);
        };
        this.close = function () {
            this.visibleRow = false;
        };
    }
}

const NewCardComponent = {
    bindings: {
        visibleRow: '=',
        kanbanBoard: '<',
        directoryBoard: '<'
    },
    template: templateNewCard,

    controller: NewCardController
};

NewCardController.$inject = ['$scope', 'PubSub', 'BoardService'];
export default NewCardComponent;