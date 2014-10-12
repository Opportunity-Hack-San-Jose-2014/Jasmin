<?php
//Updates donation status.
/* JSON input format
 * {
 *  "donationID":1,
 *  "donationStatus":1
 * }
 */
    $response = array();
    $queryJSON = json_decode(file_get_contents("php://input"),true);
    
    $dbConnection = new PDO('mysql:dbname = hack;host=localhost;charset=utf8',
    "root", "");
    $dbConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    try {
    
        $dbConnection->beginTransaction();
        //Update Donor Table
        $sql = 'UPDATE hack.Donation SET status = :donationStatus WHERE donationID=:donationID';
        $stmt = $dbConnection->prepare($sql);
        $stmt->execute(array(':donationStatus'=>$queryJSON['donationStatus'], 'donationID'=>$queryJSON['donationID']));
        
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