chatEntry = new Meteor.Collection('chatEntry');

if (Meteor.isClient) {
    Template.chatDisplay.chatEntry = function () {
      return chatEntry.find().fetch();
   };

   Template.chatBox.events({
    'click .chatBtn' : function () {
        chatEntry.insert({msg: $('.chatMessage').val()});
   }
  });
}
if (Meteor.isServer) {
 Meteor.startup(function () {
  // code to run on server at startup
 });
}
