import {} from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routing.js';

// lib modules
import 'font-awesome/css/font-awesome.css';
import angularAnimate from 'angular-animate';
import sortable from 'ng-sortable';

// services
import BoardService from './services/BoardService.js';
import BoardFactory from './services/BoardFactory.js';
import BoardManipulator from './services/BoardManipulator.js';
import model from './services/model.js'

// directives
import HomeComponent from './screens/home/home.component.js';


angular.module('todoBoard', [
        angularAnimate,
        uirouter,
        sortable
    ])
    .provider('PubSub', require('angular-pubsub'))
    .service('BoardService', BoardService)
    .service('BoardFactory', BoardFactory)
    .service('BoardManipulator', BoardManipulator)
    .service('model', BoardManipulator)
    .directive('homeComponent', () => new HomeComponent)
    .config(routing);

console.log('load');