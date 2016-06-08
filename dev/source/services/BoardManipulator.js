class BoardManipulator {

    constructor (StorageService) {
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
            return {
                title: title,
                status: status,
                details: details
            };
        }
        this.addColumn = function (board, columnName) {
            board.columns.push(new Column(columnName));
        };

        this.addCardToColumn = function (board, column, cardTitle, details) {
            angular.forEach(board.columns, function (col) {
                if (col.name === column.name) {
                    col.cards.push(new Card(cardTitle, column.name, details));
                }
            });
        };
        this.removeCardFromColumn = function (board, column, card, dir) {
            angular.forEach(board.columns, function (col) {
                if (col.name === column.name) {
                    col.cards.splice(col.cards.indexOf(card), 1);
                }
            });
            
            StorageService.saveData(board, dir);
        };
        this.addBacklog = function (board, backlogName) {
            board.backlogs.push(new Backlog(backlogName));
        };

        this.addPhaseToBacklog = function (board, backlogName, phase) {
            angular.forEach(board.backlogs, function (backlog) {
                if (backlog.name === backlogName) {
                    backlog.phases.push(new Phase(phase.name));
                }
            });
        };

        this.addCardToBacklog = function (board, backlogName, phaseName, task) {
            angular.forEach(board.backlogs, function (backlog) {
                if (backlog.name === backlogName) {
                    angular.forEach(backlog.phases, function (phase) {
                        if (phase.name === phaseName) {
                            phase.cards.push(new Card(task.title, task.status, task.details));
                        }
                    });
                }
            });
        }
    }
}
BoardManipulator.$inject = ['StorageService'];
export default BoardManipulator;