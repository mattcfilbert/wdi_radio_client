/* global angular */
angular
.module('wdiradio')
  .controller('SongIndexController', [
    'SongFactory',
    SongIndexControllerFunction
  ])

function SongIndexControllerFunction (SongFactory) {
  this.songs = SongFactory.query()
}
