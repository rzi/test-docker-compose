<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="normalize.css" rel="stylesheet" type="text/css" /> 
    <link href="style.css" rel="stylesheet" type="text/css" />
<title>Zarządzanie szkoleniami -Trenerzy</title>
</head>
<body>
<?php
        session_start();
        $sesa = $_SESSION['sesa'];
        $kategoria=$_SESSION['type_select'];
        require "connection.php";
        connection();
    ?>

<div class="eyebrow">
        <img src="./fonts/C25-SE-Earth Europe Africa-black.png" alt="" height ="25px">
        <span> Polska</span>
        <img src="./fonts/user.png" alt="" height ="25px">
        <?php
            echo'<p class="p_name">';
            echo " Witaj ";
            echo $_SESSION['name'];
            echo ' ';
            echo $_SESSION['surname'];
            echo '  ';
            echo  '</p>';
        ?>
    </div>   

    <header class="header">
        <img src="./fonts/schneider_LIO_White_RGB.png" alt="logo" height="64px">
        <span class="title"> Panel trenera -Zarządzanie zadaniami trenera</span>
        <a class="a_help"  href="./pomoc.html">Pomoc</a>
    </header>

    <div id="hrline"></div>
    <br>
    <div class="panel_admin">

    <?php
        echo 'Zarządzanie zadaniami trenera: '.'<br>'. '<br>';
        echo '<a href="group_confirmation.php"> Potwierdzanie grupowe szkoleń</a>',"<br>";
        echo '<br>';
        echo '<a href="training_done_searching.php"> Weryfikacja zrealizowanych wszystkich szkoleń</a>',"<br>";
        echo '<br>';
        echo '<a href="training_done_searching_trainer.php"> Weryfikacja szkoleń (filtr po trenerze)</a>',"<br>";
        echo '<br>';
        echo '<a href="training_done_searching_user.php"> Weryfikacja szkoleń (filtr po uczestniku szkolenia)</a>',"<br>";
        echo '<br>';
        // echo '<a href="training_done_searching_date.php"> Weryfikacja szkoleń (filtr po dacie szkolenia)</a>',"<br>";
        // echo '<br>';
        echo '<a href="inne.php"> Inne ....</a>',"<br>";   
        echo '<br>';
        echo '<br>';
        echo '<a href="index.html"><<< powrót do strony głównej</a>',"<br>";
        echo '<br>';
    ?>

</div>
    <footer>
        <span>Schneider Electric Industries Polska</span>
    </footer>
</body>
</html>
