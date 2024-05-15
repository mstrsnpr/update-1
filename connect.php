<?php
// database connection code
$con = mysqli_connect('localhost', 'root', '', 'db_contact');

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>