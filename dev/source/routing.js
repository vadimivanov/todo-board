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
        .state('test', {
            url: '/test',
            template: '<test-component></test-component>'
        });
}

export default routing;