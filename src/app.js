import angular from 'angular';
import ngMaterial from 'angular-material';
import uirouter from '@uirouter/angularjs';


import 'angular-animate';
import 'angular-aria';
import 'angular-material';

// Gis App Sections
import { HomeModule } from './home/home.module';
import AppController from './AppController';
//import Users from './users/Users';

// Styles
import 'angular-material/angular-material.scss';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
//import '../assets/app.css';

angular.module('GisApp', [
        ngMaterial,
        HomeModule,
        uirouter
    ])
    .config(($mdIconProvider, $mdThemingProvider) => {
        console.log('Running "GisApp" module...');
        $mdIconProvider
            .defaultIconSet('./assets/svg/avatars.svg', 128)
            .icon("menu", './assets/svg/menu.svg', 24)
            .icon("share", './assets/svg/share.svg', 24)
            .icon("google_plus", "./assets/svg/google_plus.svg", 24)
            .icon("hangouts", "./assets/svg/hangouts.svg", 24)
            .icon("twitter", "./assets/svg/twitter.svg", 24)
            .icon("phone", "./assets/svg/phone.svg", 24);

        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('blue');
    })
    .controller('AppController', AppController);