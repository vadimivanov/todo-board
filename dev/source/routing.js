routing.$inject = ['$stateProvider', '$urlRouterProvider'];

function routing($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    console.log('routing test');
    $stateProvider
        .state('main', {
            template: '<ui-view />'
        })
        .state('home', {
            url: '/',
            template: '<home-component><home-component>'
        })
        .state('details', {
            url: '/details',
            template: '<details-component><details-component>',
            params: {card: ''}           
        })
        .state('board', {
            url: '/board:id',
            template: '<board-component></board-component>',
            params: {directory: ''}
        });
}

export default routing;