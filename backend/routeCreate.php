<?php
//Creates an entry for a user in the database
/*
 * JSON Input
 * {
    "scheduleDate":"1/1/111",
    "donationID":[2,4,1]
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
        $sql = 'INSERT INTO route(scheduledate) VALUES(:scheduleDate)';
        $stmt = $dbConnection->prepare($sql);
        $newDate = date('Y-m-d',strtotime($queryJSON['scheduleDate']));
        $stmt->execute(array(':scheduleDate' => $newDate));
        $routeID = $dbConnection -> lastInsertId('routeid');
    
        //Update DonorAddress. set previous addresses to status 0(i.e. inactive) and insert a new record
        $sql = 'INSERT INTO donationroute(routeid,donationid,position) VALUES(:routeID,:donationID,:position)';
        for($i = 0;$i<count($queryJSON['donationID']);$i++){
            $stmt = $dbConnection->prepare($sql);
            $stmt->execute(array(':routeID'=>$routeID,':donationID'=>$queryJSON['donationID'][$i],':position'=>$i));
        }
        $sql = 'UPDATE donation dn JOIN donationroute dr ON dn.donationid = dr.donationid SET dn.status = 2 WHERE routeid = :routeID';
        $stmt = $dbConnection->prepare($sql);
        $stmt->execute(array(':routeID'=>$routeID));
        
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