import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      names: [
        {name: "South Carolina", abb: "SC", wiki: 'https://en.wikipedia.org/wiki/South_Carolina'},
        {name: "North Carolina", abb: "NC", wiki: 'https://en.wikipedia.org/wiki/North_Carolina'}
      ]
    };
  }
});
