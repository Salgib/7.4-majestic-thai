export default  Backbone.View.extend ({
	template: JST.menu,

	initialize: function(){
		this.render();
		this.listenTo(this.collection, 'update', this.render);

	},

	render: function() {
		this.$el.append(this.template(this.collection.toJSON()));
	}
});
