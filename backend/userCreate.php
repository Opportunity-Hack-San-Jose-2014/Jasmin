<?php
//Creates an entry for a user in the database
    $response = array();
    $queryJSON = json_decode(file_get_contents("php://input"),true);
    
    $dbConnection = new PDO('mysql:dbname = hack;host=localhost;charset=utf8',
    "root", "");
    $dbConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    try {
    
        $dbConnection->beginTransaction();
        //Update Donor Table
        $sql = 'INSERT INTO hack.Donor(fName,lName,email) VALUES(:fName,:lName,:email)';
        $stmt = $dbConnection->prepare($sql);
        $stmt->execute(array(':fName' => $queryJSON['fName'], ':lName' => $queryJSON['lName'], 'email'=>$queryJSON['email']));
        $donorID = $dbConnection -> lastInsertId('donorID');
    
        //Update DonorAddress. set previous addresses to status 0(i.e. inactive) and insert a new record
        $sql = 'UPDATE hack.DonorAddress SET status = 0 WHERE donorID = :donorID';
        $stmt = $dbConnection->prepare($sql);
        $stmt->execute(array(':donorID'=>$donorID));
    
        $sql = 'INSERT INTO hack.DonorAddress(donorID,address,city,state,zip) VALUES(:donorID,:address,:city,:state,:zip)';
        $stmt = $dbConnection->prepare($sql);
        $stmt->execute(array(':donorID' => $donorID, ':address' => $queryJSON['address'],
                        ':city' => $queryJSON['city'], ':state' => $queryJSON['state'], ':zip' => $queryJSON['zip']));
    
        //Update DonorPhone. Set previous Phones to status 0(i.e. inactive) and insert a new record
        $sql = 'UPDATE hack.DonorPhone SET status = 0 WHERE donorID = :donorID';
        $stmt = $dbConnection->prepare($sql);
        $stmt->execute(array(':donorID'=>$donorID));
    
        $sql = 'INSERT INTO hack.DonorPhone(donorID,phone) VALUES(:donorID,:phone)';
        $stmt = $dbConnection->prepare($sql);
        $stmt->execute(array(':donorID' => $donorID, ':phone' => $queryJSON['phone']));
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