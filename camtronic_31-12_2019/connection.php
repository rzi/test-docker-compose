<?php
function connection() {
global $link;
$link = mysqli_connect("sql.camtronic.nazwa.pl", "camtronic_spl", "Baghera33", "camtronic_spl");
    if (!mysqli_set_charset($link, "utf8")) {
        printf("Error loading character set utf8: %s\n", mysqli_error($link));
        exit();
    } else {
        mysqli_character_set_name($link);
    }
    if (!$link) {
        echo "Error: Unable to connect to MySQL." . PHP_EOL;
        echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
        echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit; echo '<br><BR>Poprawne połączenie z bazą danych<BR>';
    }
}
?>