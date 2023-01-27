<?php
$server  = "localhost";
$username = "username"
$pass = "password"

//create connection
$conn = new mysqli($server, $username, $pass)
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";
?>