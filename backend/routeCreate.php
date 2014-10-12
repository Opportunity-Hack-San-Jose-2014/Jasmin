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
    
    $dbConnection = new PDO('mysql:dbname = hack;host=localhost;charset=utf8',
    "root", "");
    $dbConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    try {
    
        $dbConnection->beginTransaction();
        //Update Donor Table
        $sql = 'INSERT INTO hack.Route(scheduleDate) VALUES(:scheduleDate)';
        $stmt = $dbConnection->prepare($sql);
        $newDate = date('Y-m-d',strtotime($queryJSON['scheduleDate']));
        $stmt->execute(array(':scheduleDate' => $newDate));
        $routeID = $dbConnection -> lastInsertId('routeID');
    
        //Update DonorAddress. set previous addresses to status 0(i.e. inactive) and insert a new record
        $sql = 'INSERT INTO hack.donationRoutes(routeID,donationID,position) VALUES(:routeID,:donationID,:position)';
        for($i = 0;$i<count($queryJSON['donationID']);$i++){
            $stmt = $dbConnection->prepare($sql);
            $stmt->execute(array(':routeID'=>$routeID,':donationID'=>$queryJSON['donationID'][$i],':position'=>$i));
        }
        $sql = 'UPDATE hack.donation dn JOIN hack.donationRoutes dr ON dn.donationID = dr.donationID SET dn.status = 2 WHERE routeID = :routeID';
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