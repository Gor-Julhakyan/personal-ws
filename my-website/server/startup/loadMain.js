Meteor.startup(function () {
  if (Main.find().count() === 0) {
    var main = [ 
        {
          'greeting': 'Welcome To My Official Website!.',
          'logo':'Here is My Logo',
        }];
 
    for (var i = 0; i < main.length; i++) {
      Main.insert(main[i]);
    }
  }

  
});

