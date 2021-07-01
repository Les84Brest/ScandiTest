<?php

namespace app\models;

use app\core\Model;

class ProductModel extends Model

{

 

  public function saveProduct($product)
  {
    
     $this->db->query('INSERT INTO `products`(`name`, `sku`, `price`, `type`, `features` ) VALUES (:name, :sku, :price, :type, :features)', $product);
    
  }

  
}
