<?php

namespace app\controllers;

use app\core\Controller;

class ProductController  extends Controller
{
  public function addAction()
  {
    $this->view->setLayout('addproduct');
    $this->view->render('AddProduct');
  }

  public function saveAction()
  {

    $jsonString = ''; // to save features as JSON string in db


    if (sizeof($_POST) > 1) {

      switch ($_POST['productType']) {
        case 'dvd':

          $jsonString = json_encode(['size' => $_POST['productSize'] . ' Mb'], JSON_FORCE_OBJECT);

          break;

        case 'book':

          $jsonString = json_encode(['weight' => $_POST['productWeight'] . ' Kg'], JSON_FORCE_OBJECT);
          break;

        case 'furniture':

          $jsonString = json_encode(['dimension' => $_POST['productHeight'] . 'x' . $_POST['productWidth'] . 'x' . $_POST['productLength']], JSON_FORCE_OBJECT);
          break;
      }

      $product = [
        'price' => $_POST['productPrice'],
        'sku' => $_POST['productSKU'],
        'name' => $_POST['productName'],
        'type' => $_POST['productType'],
        'features' => $jsonString,
      ];

      $this->model->saveProduct($product);
      logging('Location:  '. $_SERVER['HTTP_REFERER']);
      header('Location:http://scwebtest.lc/');
      exit();
    }
  }
}
