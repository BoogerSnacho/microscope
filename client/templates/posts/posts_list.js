var postsData = [
  {
    title: 'Crap',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'ice cream',
    url: 'http://themeteorbook.com'
  }
];
Template.postsList.helpers({
  posts:postsData
});
