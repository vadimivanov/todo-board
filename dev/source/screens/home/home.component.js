let templateHome = require('./home.html');

class HomeComponent {
    constructor () {
        this.template = templateHome;
        this.restrict = 'E';
        this.scope = {};
        let _state;
        let _BoardService;
        let _BoardFactory;
        let _PubSub;

        this.link = function ($scope) {
            $scope.kanbanBoard = _BoardService.kanbanBoard(_BoardFactory.kanban);

            console.log('$scope.kanbanBoard ', $scope.kanbanBoard);
            $scope.kanbanSortOptions = {

                itemMoved: function (event) {
                    event.source.itemScope.modelValue.status = event.dest.sortableScope.$parent.column.name;
                },
                orderChanged: function (event) {
                },
                containment: '#board'
            };

            $scope.removeCard = function (column, card) {
                _BoardService.removeCard($scope.kanbanBoard, column, card);
            };

            $scope.addNewCard = function (column) {
                _BoardService.addNewCard($scope.kanbanBoard, column);
            }
        };
        
        this.controller = ['$scope', '$state', 'PubSub', 'BoardService', 'BoardFactory',
            ($scope, $state, PubSub, BoardService, BoardFactory) => {
            console.log('HomeComponent controller',BoardService, BoardFactory);
            _state = $state;
            _PubSub = PubSub;
            _BoardService = BoardService;
            _BoardFactory = BoardFactory;
            
        }];
    }
}

HomeComponent.$inject = ['$scope', '$state', 'PubSub', 'BoardService', 'BoardFactory'];
export default HomeComponent;