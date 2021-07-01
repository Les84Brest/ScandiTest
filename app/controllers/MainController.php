<?php

namespace app\controllers;

use app\core\Controller;


class MainController  extends Controller
{
  public function indexAction()
  {
    $result = $this->model->getProducts();
    $vars = [
      'products' => $result,
      'title' => 'Product List',
    ];

    $this->view->render('Products List', $vars);
  }

  public function deleteAction()
  {
   
    if(isset($_POST)){
      
      $this->model->deleteProducts($_POST);
      
    }
   
  }
}


/*
INSERT INTO `products` ( `name`, `sku`, `price`, `features`, `type`) VALUES
( 'Michio Kaku. Physics of the Impossible', 'phisics-of-the-impossible', 16.99, '{\"Weight\": \"1.5Kg\"}', 'book'),
( 'J. K. Rowling. Harry Potter and the Chamber of Secrets', 'chamber-of-secrets', 15, '{\"Weight\": \"1.7Kg\"}', 'book'),
( 'A.Weir. The Martian', 'the-martian-weir', 18, '{\"Weight\": \"1.8Kg\"}', 'book'),
( 'Metallica Live Nimes 2009', 'metallica-nimes', 13, '{\"Size\": \"4500Mb\"}', 'DVD'),
( 'J. R. R. Tolkien.The Lord of the Rings. The Fellowship of the Ring', 'lord-rings', 14.5, '{\"Size\": \"4135Mb\"}', 'DVD'),
( 'Office desk', 'off-desk', 55.8, '{\"dimensions\": \"60 x 120 x 215\"}', 'furniture'),
( 'TV shelf', 'tv-shelf', 30.31, '{\"dimensions\" : \"120 х 30х 60\"}', 'furniture');
*/