class DetailsController {
    constructor($scope, $state, BoardService, BoardFactory, StorageService) {
        this.card = $state.params.card;
        this.detailsChanges = this.card.details || '';
        this.tempBoard = BoardService.getBoard();
        this.saveChanges = function () {
            for (var i = 0; i < this.tempBoard.columns.length; i++) {
                if (this.tempBoard.columns[i].name == this.card.status) {
                    for (var j = 0; j < this.tempBoard.columns[i].cards.length; j++) {
                        if (this.tempBoard.columns[i].cards[j].title == this.card.title) {
                            this.tempBoard.columns[i].cards[j].details = this.detailsChanges;
                            StorageService.saveData(this.tempBoard, BoardService.getDir());
                        }
                    }
                }
            }
        };
    }
}

const DetailsComponent = {
    bindings: {
        directory: '<'
    },
    template: require('./details.html'),

    controller: DetailsController

};

DetailsController.$inject = ['$scope','$state', 'BoardService', 'BoardFactory', 'StorageService'];
export default DetailsComponent;
