/* global angular */
angular
.module('wdiradio')
  .factory('SongFactory', [
    '$resource',
    songService
  ])

function songService ($resource) {
  return $resource('http://localhost:3000/songs/:id.json', {}, {
    update: {
      method: 'PUT'
    }
  })
}
