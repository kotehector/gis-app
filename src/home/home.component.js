import templateUrl from './home.html';

export const HomeComponent = {
    templateUrl,
    controller: class HomeComponent {
        constructor() {
            'ngInject';
        }

        $onInit() {
            console.log("On HomeComponent ...");
            let map = angular.element(document.getElementById("#mapid"));
            map = L.map('mapid').setView([42.326663, -8.784734], 13);

            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
        }
    }
};