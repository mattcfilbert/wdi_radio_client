/* global angular */
'use strict'

angular
.module('wdiradio', [
  'ui.router',
  'ngResource'
])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  RouterFunction
])

function RouterFunction ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'js/ng-views/home.html'
  })
  .state('songsIndex', {
    url: '/songs',
    templateUrl: 'js/ng-views/index.html',
    controller: 'SongIndexController',
    controllerAs: 'vm'
  })
  $urlRouterProvider.otherwise('/')
}
