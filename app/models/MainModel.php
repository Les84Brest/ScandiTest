<?php

namespace app\models;

use app\core\Model;

class MainModel extends Model

{

 

  public function getProducts()
  {
    $result = $this->db->row('SELECT * FROM products;');
    return $result;
  }

  public function deleteProducts($arrProducts)
  {
    $delItems = implode(', ', $arrProducts);
    $params = [
      'prodIds' => $delItems,
    ];
  
    $this->db->deleteProducts($params);

    
  }
}
