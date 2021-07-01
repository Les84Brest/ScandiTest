<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  <title>Add Product</title>
  <link rel="stylesheet" href="/app/accets/css/main.min.css">
</head>

<body>
  <header class="header">
    <div class="header__inner">
      <h1 class="header__title">Product Add</h1>
      <div class="header__buttons">
        <button class="btn product__save">Save</button><a class="btn" href="/">cancel</a>
      </div>
    </div>
  </header>
  <section class="products">
    <div class="container">

    <?php echo $content; ?>
      
    </div>
  </section>
  <footer class="footer">
    <p class="footer__text">Scandiweb Test assigment </p>
  </footer>
  <header class="header"></header>
  <script src="/app/accets/js/add-prod.js"></script>
</body>

</html>