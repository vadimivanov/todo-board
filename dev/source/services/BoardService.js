class BoardService {

    constructor ($uibModal, BoardManipulator, StorageService) {
        this.dirBoard = '';
        function Board(name, numberOfColumns) {
            return {
                name: name,
                numberOfColumns: numberOfColumns,
                columns: [],
                backlogs: []
            };
        }

        this.setDir = function (board) {
            this.dirBoard = board;
        };
        this.getDir = function () {
            return this.dirBoard;
        };

        this.removeCard = function (board, column, card, dir) {
            if (confirm('Are You sure to Delete?')) {
                BoardManipulator.removeCardFromColumn(board, column, card, dir);
            }
        };

        this.addNewCard = function (cardDetails, directory) {
            cardDetails.board.name = directory;
            BoardManipulator.addCardToColumn(cardDetails.board, cardDetails.column, cardDetails.title, cardDetails.details);
            StorageService.saveData(cardDetails.board, directory);
        };
        this.kanbanBoard =  function (board) {
            var kanbanBoard = new Board(board.name, board.numberOfColumns);
            angular.forEach(board.columns, function (column) {
                BoardManipulator.addColumn(kanbanBoard, column.name);
                angular.forEach(column.cards, function (card) {
                    BoardManipulator.addCardToColumn(kanbanBoard, column, card.title, card.details);
                });
            });
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