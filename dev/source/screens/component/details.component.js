class DetailsController {
    constructor($state, BoardService, BoardFactory, StorageService) {
        console.log('$scope.DetailsController ', $state.params);
        this.card = $state.params.card;
    }
}

const DetailsComponent = {
    bindings: {
        directory: '<'
    },
    template: require('./details.html'),

    controller: DetailsController

};

DetailsController.$inject = ['$state', 'BoardService', 'BoardFactory', 'StorageService'];
export default DetailsComponent;
