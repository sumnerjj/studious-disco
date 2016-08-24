Template.postItem.helpers({
  ownPost: function() {
    return this.userId == Meteor.userId();
  },

});

Template.shortPost.helpers({
  ownPost: function() {
    return this.userId == Meteor.userId();
  },

	shortUrl: function() {
		shortened = this.url
		if (shortened.length < 200){
			return shortened}
		else {
			return shortened.substring(0,199) + "..."
		}

	}
});

Template.postItem.events({
	
  'click .post': function(e) {
    e.preventDefault();
		if (e.target.nodeName == "A"){
			var hr = e.target.getAttribute("href")
			console.log(hr)
		  return Router.go(hr);
		}
		console.log(e.target.nodeName);
		Router.go('postPage', {_id: this._id});
  }
});

Template.shortPost.events({
	
  'click .post': function(e) {
    e.preventDefault();
		if (e.target.nodeName == "A"){
			var hr = e.target.getAttribute("href")
			console.log(hr)
		  return Router.go(hr);
		}
		console.log(e.target.nodeName);
		Router.go('postPage', {_id: this._id});
  }
});
