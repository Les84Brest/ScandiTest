<form id="product_form">
  <div class="input__holder">
    <label>SKU</label>
    <input id="sku" type="text" name="productSKU">
    <div class="form__error sku">The field cannot be empty</div>
  </div>
  

  <div class="input__holder">
    <label>Name</label>
    <input id="name" type="text" name="productName">
    <div class="form__error name">The field cannot be empty</div>
  </div>
  <div class="input__holder">
    <label>Price</label>
    <input id="price" type="number" min="0" name="productPrice">
    <div class="form__error price">Please, provide price of product</div>
  </div>
  <div class="input__holder">
    <label>Type Switcher</label>
    <select id="productType" name="productType">
      <option value="dvd">DVD </option>
      <option value="book">Book</option>
      <option value="furniture">Furniture</option>
    </select>
  </div>
  <div class="product__features">
    <h2 class="product__features-title">Features</h2>


    <div class="feature-wrap" data-product-features="dvd">
      <div class="feature__descr">Please, provide size </div>
      <div class="input__holder">
        <label>Size</label>
        <input id="size" type="number" min="0" name="productSize">
        <div class="form__error">Please, provide size!</div>
      </div>
    </div>


    <div class="feature-wrap " data-product-features="book">
      <div class="feature__descr">Please, provide weight</div>
      <div class="input__holder">
        <label>Weight</label>
        <input id="weight" type="number" min="0" name="productWeight">
        <div class="form__error">Please, provide Weight!</div>       

      </div>
    </div>

    <div class="feature-wrap  " data-product-features="furniture">
      <span>Dimensions </span>
      <div class="feature__descr">Please, provide dimensions</div>
      <div class="input__holder">
        <label>Height </label>
        <input id="height" type="number" min="0" name="productHeight">
        <div class="form__error">Please, provide Height!</div>
      </div>
      <div class="input__holder">
        <label>Width </label>
        <input id="width" type="number" min="0" name="productWidth">
        <div class="form__error">Please, provide Width!</div>
      </div>
      <div class="input__holder">
        <label>Length </label>
        <input  id="length" type="number" min="0" name="productLength">
        <div class="form__error">Please, provide length!</div>
      </div>
      
    </div>
  </div>
</form>