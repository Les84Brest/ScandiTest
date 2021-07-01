<?php

namespace app\lib;

use PDO;

class Db
{
  protected $db;

  function __construct()
  {
    $config =  require 'app/config/db.php';


    $this->db = new PDO('mysql:host=' . $config['host'] . ';dbname=' . $config['name'], $config['user'], $config['password']);
  }

  public function query($sql, $params = [])
  {
    
    $stmt = $this->db->prepare($sql, $params);
    if (!empty($params)) {
      foreach ($params as $key => $val) {
        
        $stmt->bindValue(':' . $key, $val);
      }
    }

    $stmt->execute();

    return  $stmt;
  }

  public function row($sql, $params = [])
  {
    $result =  $this->query($sql, $params);
    return $result->fetchAll(PDO::FETCH_ASSOC);
  }

  public function column($sql, $params = [])
  {
    $result =  $this->query($sql, $params);
    return $result->fetchColumn();
  }



  public function saveProduct($sql, $params){

  }
  public function deleteProducts($products)
  {

    if (!empty($products)) {
      $sql = 'DELETE FROM products WHERE id IN(' . $products['prodIds'] . ');';
      $stmt = $this->db->prepare($sql);

      $stmt->execute();
    }
  }
}
