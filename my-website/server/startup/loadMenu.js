Meteor.startup(function () {
  if (Menu.find().count() === 0) {
    var menu = [ 
        {
          'link': '/home',
          'title':'Home',
        },
        {
          'link': '/about-us',
          'title':'About US',
        },
        {
          'link': '/contacts',
          'title':'Contacts',
        }
    ];
 
    for (var i = 0; i < menu.length; i++) {
      Menu.insert(menu[i]);
    }
  }

  
});
