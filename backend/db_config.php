<?php
//Contains configuration information for connecting to database. Required for every file.
define('DB_USER',"root");
define('DB_PASSWORD',"");
define('DB_DATABASE',"hack");
define('DB_SERVER',"localhost");

function dbConnect(){
    $dbConnection = new PDO('mysql::host='. DB_SERVER .';charset=utf8;dbname='.DB_DATABASE,DB_USER,DB_PASSWORD);
    $dbConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $dbConnection -> exec('use '.DB_DATABASE);
    return $dbConnection;
}

?>
