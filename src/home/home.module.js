import angular from 'angular';
import uirouter from '@uirouter/angularjs';


import { HomeComponent } from './home.component';
import './home.scss';

export const HomeModule = angular
    .module('GisApp.Home', [
        uirouter,
    ])
    .component('home', HomeComponent)
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider.state('home', {
            url: '/',
            // component: 'home',
            views: {
                'content@': 'home'
            }
        });
    })
    .name;