class BoardFactory {

    constructor () {
        this.kanban = {
            "name": "",
                "numberOfColumns": 4,
                "columns": [
                {"name": "Ideas", "cards": []},
                {"name": "Not started", "cards": []},
                {"name": "In progress", "cards": []},
                {"name": "Done", "cards": []}
            ]
        };
    }
}

export default BoardFactory;