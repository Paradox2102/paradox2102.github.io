<?php
file_put_contents("emails.txt", $_POST['email'] . PHP_EOL, FILE_APPEND);
?>