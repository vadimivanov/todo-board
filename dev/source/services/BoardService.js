class BoardService {

    constructor ($uibModal, BoardManipulator, StorageService) {
        function Board(name, numberOfColumns) {
            return {
                name: name,
                numberOfColumns: numberOfColumns,
                columns: [],
                backlogs: []
            };
        }

        this.removeCard = function (board, column, card) {
            if (confirm('Are You sure to Delete?')) {
                BoardManipulator.removeCardFromColumn(board, column, card);
            }
        };

        this.addNewCard = function (cardDetails) {
            // var modalInstance = $uibModal.open({
            //     template: '<new-card-component></new-card-component>',
            //     // controller: 'NewCardController',
            //     backdrop: 'static',
            //     resolve: {
            //         column: function () {
            //             return column;
            //         }
            //     }
            // });
            // modalInstance.result.then(function (cardDetails) {
                console.log('---addCardToColumn.result--- ', cardDetails);
            //     if (cardDetails) {
                    BoardManipulator.addCardToColumn(cardDetails.board, cardDetails.column, cardDetails.title, cardDetails.details);
                    StorageService.saveData(cardDetails.board, 'ToDoBoard');
                // }
            // });
        };
        this.kanbanBoard =  function (board) {
            var kanbanBoard = new Board(board.name, board.numberOfColumns);
            angular.forEach(board.columns, function (column) {
                BoardManipulator.addColumn(kanbanBoard, column.name);
                angular.forEach(column.cards, function (card) {
                    BoardManipulator.addCardToColumn(kanbanBoard, column, card.title, card.details);
                });
            });
            console.log('BoardService----kanbanBoard ', kanbanBoard);
            return kanbanBoard;
        };
        this.sprintBoard =  function (board) {
            var sprintBoard = new Board(board.name, board.numberOfColumns);
            angular.forEach(board.columns, function (column) {
                BoardManipulator.addColumn(sprintBoard, column.name);
            });
            angular.forEach(board.backlogs, function (backlog) {
                BoardManipulator.addBacklog(sprintBoard, backlog.title);
                angular.forEach(backlog.phases, function (phase) {
                    BoardManipulator.addPhaseToBacklog(sprintBoard, backlog.title, phase);
                    angular.forEach(phase.cards, function (card) {
                        BoardManipulator.addCardToBacklog(sprintBoard, backlog.title, phase.name, card);
                    });
                });

            });
            return sprintBoard;
        }
    }

}

BoardService.$inject = ['$uibModal', 'BoardManipulator', 'StorageService'];
export default BoardService;