<?php

ini_set('display_erros', 1);
error_reporting(E_ALL);


function debug($str)
{
  echo '<pre>';
  var_dump($str);
  echo '</pre>';

  exit;
}

/* $type variants
str - log string
arr -  log array
 */

function logging($data, $type = 'str')
{
  
  switch ($type) {
    case 'arr':
      $log = date('Y-m-d H:i:s') . ' ' . print_r($data, true);
      break;

    default:
    $log = date('Y-m-d H:i:s') . ' ' . $data;

      break;
  }
  file_put_contents(__DIR__ . '/log.txt', $log . PHP_EOL, FILE_APPEND);
}
