// import ajaxConfig from './ajax-config';
// import IndexMenuView from './views/indexMenuView';
// import IndexCheckoutView from './views/indexCheckoutView';
// import {ItemCollection} from './models/item';
//
//
// var Router = Backbone.Router.extend({
// 	routes: {
// 		'': 'index',
// 	},
//
// 	initialize: function(){
// 		this.indexMenuView();
// 		this.indexCheckoutView();
// 		this.items = new ItemCollection();
// 		items.fetch().then(function(){
//       console.log(items);
// 	},
//
// 	indexMenuView: function (){
// 		this.menuView = new IndexMenuView({collection: this.items});
// 		$('#appmenu').append(this.menuView.el);
// 	},
//
// 	indexCheckoutView: function () {
// 		this.checkoutView = new IndexCheckoutView();
// 		$('#appcart').append(this.checkoutView.el);
// 	},
// });
//
// var router = new Router();
//
// export default router;
