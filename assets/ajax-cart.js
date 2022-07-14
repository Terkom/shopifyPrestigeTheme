// Retreive upsell collection as JSON
function getUpsell(){
  $.ajax({
    type: 'GET',
    url: '/collections/recommended/products.json',
    dataType: 'json',
    success: function(res){
      var products = res.products;
      
      $.ajax({
        type: 'GET',
        url: '/cart.js',
        dataType: 'json',
        success: function(cartRes){
          var cartItems = cartRes.items;
          upsellProducts(products, cartItems);
        },
        error: function(status){
          alert(status);
        }
      });
      
    },
    error: function(status){
      alert(status);
    }
  })
}

function upsellProducts(products, cartItems) {
  var upsellProducts = [],
  	  cartHandles = [],
      variant = {},
      price = "",
      img_src = "",
      id = "",
  	  count = 0;
 
  // create array of all item handles in cart
  $.each(cartItems, function(index, itemHandle) {
    cartHandles.push(itemHandle.handle);
  });
  
  // iterate through upsell products
  $.each(products, function(index, productItem) {
    
    if (count == 3) {
      return false;
    }
    
    var handle = productItem.handle;
    
    // filter out items that are already in cart
    if( $.inArray(handle, cartHandles) == -1){  
      
      // get first available variant, add to handlebars result
      $.each(productItem.variants, function(index, variantItem) {    
        if (variantItem.available && typeof variantItem.featured_image !== 'undefined') {
                  
            variant = {
              id: variantItem.id,
              price: Shopify.formatMoney(variantItem.price, null).replace('.00', ''),
              img_src: variantItem.featured_image.src.replace(".jpg", "_180x.jpg"),
              handle: handle
			}
            upsellProducts.push(variant);
            count++
			return false;
	    }
	  });
    }
  });
  buildPromo(upsellProducts);
};
    
    // This function takes one parameter, the array of filtered products.
function buildPromo(upsellProds) {
    var $productContainer = $('#PromoContainer');
  	$productContainer.empty();
  
  	var data = {}, 
        source = $("#PromoTemplate").html(),
        template = Handlebars.compile(source);

	data = {
        product: upsellProds
    } 
    $productContainer.append(template(data)); 
}