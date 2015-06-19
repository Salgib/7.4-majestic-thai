export default Backbone.View.extend ({
	template: JST.checkoutcart,

	initialize: function(){
		this.render();
	},

	render: function() {
		this.$el.append(this.template());
	}
});
