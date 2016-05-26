class BoardFactory {

    constructor () {
        this.kanban = {
            "name": "Kanban Board",
                "numberOfColumns": 4,
                "columns": [
                {"name": "Ideas", "cards": [
                    {"title": "Come up with a POC for new Project"},
                    {"title": "Design new framework for reporting module"}
                ]},
                {"name": "Not started", "cards": [
                    {"title": "Explore new IDE for Development",
                        "details": "Testing Card Details"},
                    {"title": "Get new resource for new Project",
                        "details": "Testing Card Details"}
                ]},
                {"name": "In progress", "cards": [
                    {"title": "Develop ui for tracker module",
                        "details": "Testing Card Details"},
                    {"title": "Develop backend for plan module",
                        "details": "Testing Card Details"}
                ]},
                {"name": "Done", "cards": [
                    {"title": "Test user module",
                        "details": "Testing Card Details"},
                    {"title": "End to End Testing for user group module",
                        "details": "Testing Card Details"},
                    {"title": "CI for user module",
                        "details": "Testing Card Details"}
                ]}
            ]
        };
    }

}

export default BoardFactory;