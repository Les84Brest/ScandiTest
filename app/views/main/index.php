<div class="products__list">
  <?php
  extract($vars);

  foreach ($products as  $product) : ?>

    <div class="product" data-product-id="<?=$product['id']?>">

      <input class="delete-checkbox" type="checkbox">
      <div class="product__sku"><?= $product['sku'] ?></div>
      <div class="product__name"><?= $product['name'] ?></div>
      <div class="product__price">Price: <?= $product['price'] ?>$</div>

      <div class="product_feature">
        <?php
        $features = json_decode($product['features']); //decoding Json 
        foreach ($features as $key => $value) { //converging every feature decoded from JSON into pair key:value
          $value = ucfirst($value);
          echo "<span class=\"product__feature-name\"> $key : </span><span class=\"product__feature-value\">$value</span>";
        } ?>


      </div>
    </div>


  <?php endforeach ?>
</div>