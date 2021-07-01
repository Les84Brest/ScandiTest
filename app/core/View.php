<?php

namespace app\core;

class View
{


  public $path;
  public $route;
  public $layout = 'default';

  public function __construct($route)
  {
    $this->route = $route;
    $this->path = $route['controller'] . '/' . $route['action'];
    
  }

  public function render($title, $vars = [])
  {
    extract($vars);
    
    $contentFile = 'app/views/' . $this->path . '.php';
    $content = '';
    if(file_exists($contentFile)){
      ob_start();
      require $contentFile;
      $content = ob_get_clean();
    }else{
      echo 'Layout is not found' . $this->path;
    }
    
    require 'app/views/layouts/' . $this->layout . '.php';
  }

  public static function errorCode($code){
    http_response_code($code);
    $path = 'app/views/errors/' . $code . '.php';

    if(file_exists($path)){
      require $path;
    }

    exit;
  }

  public function redirect($url){
    header('location: ' . $url);
    exit;
  }
  public function setLayout($layout){
    $this->layout = $layout;
  }
}
