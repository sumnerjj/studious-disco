// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();
  
  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Susan' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Beth' }
  });
  var sacha = Meteor.users.findOne(sachaId);
  
  var telescopeId = Posts.insert({
    title: 'Laundry day!',
    userId: sacha._id,
    author: sacha.profile.name,
    url: "I'm going to the laundromat and bringing my little ones (4 and 6) with me at 2pm today, if anyone wants to meet there that would be fun!",
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2,
    upvoters: [], votes: 0
  });
  
  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: "We'll be there!"
  });
  
  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: "Great, see you there!"
  });
  
  for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: sacha.profile.name,
      userId: sacha._id,
      url: 'Just some filler text here.' + i,
      submitted: new Date(now - i * 3600 * 1000 + 1),
      commentsCount: 0,
      upvoters: [], votes: 0
    });
  }
}
