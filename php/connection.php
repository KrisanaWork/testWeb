<?php
$username = "postgres";
$password = "postgres";

$conn = new PDO('pgsql:host=localhost; port=5432; dbname=finalProject;', $username, $password);
if (!$conn) {
    echo "Error";
} else {
    echo "Complete";
}
?>