<?php
file_put_contents("queue.txt", $_POST['email'] . PHP_EOL, FILE_APPEND);
?>