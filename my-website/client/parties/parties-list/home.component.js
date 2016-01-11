angular.module('myPersonal').directive('home', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/parties/parties-list/home.html',
    controllerAs: 'home',
    controller: function ($scope, $reactive) {
      $reactive(this).attach($scope);
 //***
      this.newMain = {};

      this.newMenu = {};
 
      this.helpers({
        main: () => {
          return Main.find({});
        },
        menu: () => {
          return Menu.find({});
        }
      });

      this.dbMain = this.main[0];

      if (this.dbMain === 0) {
        console.log("Mian Collection is null dbMain variable ERROR (line: 17)");
      } else {
        this.greetingMsg = this.main[0].greeting;
        this.logoImg = this.main[0].logo;
      }

    }
  }
});