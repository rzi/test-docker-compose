<?php

if(isset($_FILES['uploaded'])){
$target = "spl/Signed/".basename($_FILES['uploaded']['name']) ;
echo "<br>"." target: " . $target. "<br>";
print_r($_FILES);

if(move_uploaded_file($_FILES['uploaded']['tmp_name'],$target)) echo "OK!";//$chmod o+rw galleries

}
else{
echo "<form enctype='multipart/form-data' action='' method='POST'>";
echo "File:<input name='uploaded' type='file'/><input type='submit' value='Upload'/>";
echo "</form>";
}

?>