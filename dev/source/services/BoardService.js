class BoardService {

    constructor ( BoardManipulator, model) {
        function Board(name, numberOfColumns) {
            return {
                name: name,
                numberOfColumns: numberOfColumns,
                columns: [],
                backlogs: []
            };
        }

        function Column(name) {
            return {
                name: name,
                cards: []
            };
        }

        function Backlog(name) {
            return {
                name: name,
                phases: []
            };
        }

        function Phase(name) {
            return {
                name: name,
                cards: []
            };
        }

        function Card(title, status, details) {
            this.title = title;
            this.status = status;
            this.details = details;
            return this;
        }
        console.log('BoardService---- ', model);
        this.removeCard = function (board, column, card) {
            if (confirm('Are You sure to Delete?')) {
                BoardManipulator.removeCardFromColumn(board, column, card);
            }
        };

        this.addNewCard =  function (board, column) {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/partials/newCard.html',
                controller: 'NewCardController',
                backdrop: 'static',
                resolve: {
                    column: function () {
                        return column;
                    }
                }
            });
            modalInstance.result.then(function (cardDetails) {
                if (cardDetails) {
                    BoardManipulator.addCardToColumn(board, cardDetails.column, cardDetails.title, cardDetails.details);
                }
            });
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

BoardService.$inject = [ 'BoardManipulator', 'model'];
export default BoardService;