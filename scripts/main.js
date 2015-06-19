import ajaxConfig from './ajax-config';
import IndexMenuView from './views/indexMenuView';
import IndexCheckoutView from './views/indexCheckoutView';
import {ItemCollection} from './models/item';

(function(){
  'use strict';

  $(document).ready(function(){

    var items = new ItemCollection();
    items.fetch().then(function(){
      console.log(items);
      });

  	var menuView = new IndexMenuView ({collection: items});
  		$('#appmenu').append(menuView.el);


  // 	indexCheckoutView: function () {
  // 		this.checkoutView = new IndexCheckoutView();
  // 		$('#appcart').append(this.checkoutView.el);
  	});

})();
