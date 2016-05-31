let templateNewCard = require('./newCard.html');

class NewCardController {
    constructor($scope, PubSub, BoardService) {
        
        this.columnName = 'ooooo';
        this.column = 'Ideas';
        this.title = '';
        this.details = '';
        
        this.addNewCard = function () {
            BoardService.addNewCard({board: this.kanbanBoard, title: this.title, column: {name: this.column}, details: this.details});
        };
        this.close = function () {
            this.visibleRow = false;
        };
    }
}

const NewCardComponent = {
    bindings: {
        visibleRow: '=',
        kanbanBoard: '<'
    },
    template: templateNewCard,

    controller: NewCardController
};
console.log('newCardComponent --- ', NewCardComponent);

NewCardController.$inject = ['$scope', 'PubSub', 'BoardService'];
export default NewCardComponent;