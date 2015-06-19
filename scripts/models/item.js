var ItemCollection = Backbone.Collection.extend({
  url: "https://api.parse.com/1/classes/Menu",
  parse: function(response) {
    return response.results;
  }
});

export default {ItemCollection};
