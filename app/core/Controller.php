<?php

namespace app\core;

abstract class Controller
{
  public $route; // current path
  public $view;
  public $model;

  public function __construct($route)
  {
    $this->route = $route;
    $this->view = new View($route); //adding View
    $this->model = $this->loadModel($route['controller']); //load Model by controller name
    
  }


  /*Model loader*/
  public  function loadModel($name)
  {

    $path = 'app\models\\' . ucfirst($name) . 'Model';
    if (class_exists($path)) {
      return new $path;
    }
  }

  
}
