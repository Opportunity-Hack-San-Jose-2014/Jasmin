<?php
//Deletes donation from route 
/*
 * JSON Input
 * {
    "routeID":1,
    "donationID":1
    }
 * JSON Output
 * {
    "status":1,
    "message":"Success!"
    }
 */
$response = array();
$queryJSON = json_decode(file_get_contents("php://input"),true);

require_once __DIR__.'/db_config.php';
$dbConnection = dbConnect();

try {

    $dbConnection->beginTransaction();
    //Update Donor Table
    $sql = 'DELETE FROM donationroute WHERE donationid = :donationID and routeid = :routeID';
    $stmt = $dbConnection -> prepare($sql);
    $stmt->execute(array(':donationID'=>$queryJSON['donationID'],':routeID'=>$queryJSON['routeID']));

    $sql = 'UPDATE donation SET status = 1 WHERE donationid = :donationID';
    $stmt = $dbConnection -> prepare($sql);
    $stmt->execute(array(':donationID'=>$queryJSON['donationID']));

    $dbConnection->commit();

    $response['status']=1;
    $response['message']="Success!";
    echo json_encode($response);
}
catch(PDOException $e){
    $dbConnection->rollBack();
    $response['status']=0;
    $response['message']=$e->getMessage();
    echo json_encode($response);
}
?>