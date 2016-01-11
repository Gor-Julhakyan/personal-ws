angular.module('myPersonal').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
 
  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home></home>'
    })
    .state('Contacts', {
      url: '/contacts',
      template: '<s></s>'
    });
    /*
    .state('partyDetails', {
      url: '/parties/:partyId',
      template: '<party-details></party-details>'
    });
  */
  $urlRouterProvider.otherwise("/home");
});