class MyComponentController {
    constructor() {
        this.name = 'take my value';
        console.log('$scope.name ', this.name);
    }
}

const testComponent = {
    bindings: {
        // 'name': '='
    },
    template: require('./test.html'),
    // template: '<div class="my-component">{{ $ctrl.name }}</div>',

    controller: MyComponentController

};
console.log('myComponentDefinition ', testComponent);
export default testComponent;
