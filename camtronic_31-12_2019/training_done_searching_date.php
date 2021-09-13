<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="normalize.css" rel="stylesheet" type="text/css" /> 
    <link href="style.css" rel="stylesheet" type="text/css" />
<title>Zarządzanie szkoleniami -Weryfikacja zrealizowanych szkoleń</title>
</head>
<body>
<?php
        session_start();
        $sesa = $_SESSION['sesa'];
        $kategoria=$_SESSION['type_select'];
        $b=$sesa;
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
        <span class="title"> Panel trenera -Weryfikacja zrealizowanych szkoleń</span>
        <a class="a_help"  href="./pomoc.html">Pomoc</a>
    </header>

    <div id="hrline"></div>
    <br>
    <div class="panel_admin">

    <?php
        echo 'Weryfikacja zrealizowanych szkoleń (filtr po dacie szkolenia): '.'<br>'. '<br>';
        echo "<form action='' name='form' method='GET'>";
        echo 'wprodadź cyfrową część numeru date szkolenia: ' ;
        echo "<input type='text' name='trainer_for_filter_name'  placeholder='RRRR-MM-DD'>";
        echo "<input type='submit' value='filtruj po uczestniku'>";
        echo "</form>";

        if(isset($_GET['spl_training_date'])) {
            // id index exists
            $b= $_GET['spl_training_date'];
           // echo "wartośc _get: ". $b;
        }

    ?>
        <br>
        <br>
        <div class="panel_left">
            <?php   

                echo '<div style="width:auto; height:200px; overflow:auto;">';
                // tabela z wykonanymi wszystkimi splami
                echo "<table id='table1' class='fixed_headers' style='width:100%; border-collapse: collapse;' border='1'>
                <thead>
                    <tr style='width:98%;'>
                        <th>Nr.</th>
                        <th> Tytuł</th>
                        <th> Trener</th>
                        <th> Data szkolenia</th>
                        <th> Link do potwierdzenia (jeśli wysłano plik na FTP)</th>
                    </tr>
                </thead>";
                echo "<tbody>";
                if($result = mysqli_query($link,"select DISTINCT * from spl_base WHERE spl_trainer_sesa=$b ")){
                    while($row = mysqli_fetch_assoc($result)) {
                        $val1 = $row['id'];
                        $val2 = $row['id_sesa'];
                        $val3 = $row['no_spl'];
                        $val4 = $row['title_spl'];
                        $val5 = $row['spl_trainer_sesa'];
                        $val6 = $row['spl_training_date'];

                        echo "<tr>";
                        echo "<td  style='width:1%;'>";
                        echo "$val3";
                        echo "</td>";
                        echo "<td style='width:20%;'>";
                        echo "$val4";
                        echo "</td>";
                        echo "<td style='width:10%;'>";
                        echo "$val5";
                        echo "</td>";
                        echo "<td style='width:10%;'>";
                        echo "$val6";
                        echo "</td>";
                        echo "<td style='width:20%;'>";
                        echo '<a href="view_training_confirmation.php?a='.$val1.'&sesa='.$sesa.'">Link'.$val1.'</a>';
                        echo "</tr>" ;
                    }
                }

                echo "</tbody>
                    </table>";
                echo '</div>';

            ?>        
        </div>

    <?php      
        echo '<br>';
        echo '<br>';
        echo '<a href="trainer_menu.php"><<< powrót do Zarządzania zadaniamim trenera</a>',"<br>";
        echo '<br>';
    ?>

</div>
    <footer>
        <span>Schneider Electric Industries Polska</span>
    </footer>
</body>
</html>
