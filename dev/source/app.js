import {} from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routing.js';

// lib modules
import 'font-awesome/css/font-awesome.css';
import angularAnimate from 'angular-animate';
import sortable from 'ng-sortable';
// import bootstrap from 'angular-ui-bootstrap';
import bootstrapNpm from 'angular-bootstrap-npm';

// services
import BoardService from './services/BoardService.js';
import BoardFactory from './services/BoardFactory.js';
import BoardManipulator from './services/BoardManipulator.js';
import StorageService from './services/storageService.js'

// directives
import HomeComponent from './screens/home/home.component.js';
import NewCardComponent from './screens/partials/newCard.component.js';
// import testComponent from './screens/component/test.component.js';

angular.module('todoBoard', [
        angularAnimate,
        uirouter,
        sortable,
        bootstrapNpm
    ])
    .provider('PubSub', require('angular-pubsub'))
    .service('BoardService', BoardService)
    .service('BoardFactory', BoardFactory)
    .service('BoardManipulator', BoardManipulator)
    .service('StorageService', StorageService)
    .component('homeComponent', HomeComponent)
    .component('newCardComponent', NewCardComponent)
    // .component("testComponent", testComponent)
    .config(routing);

console.log('load');