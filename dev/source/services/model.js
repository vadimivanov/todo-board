class model {

    constructor () {
        console.log('class model ');
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

    }
}

export default model;