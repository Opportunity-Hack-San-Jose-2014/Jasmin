<?php
//Creates an entry for a user in the database
/* JSON Input
 * {
    "fName":"Name1",
    "lName":"Name2",
    "email":"email@gmail.com",
    "address":"address 1",
    "city":"SF",
    "state":"CA",
    "zip":"12334",
    "phone":"222-333-4444"
}
 */
    $response = array();
    $queryJSON = json_decode(file_get_contents("php://input"),true);
    
    require_once __DIR__.'/db_config.php';
    $dbConnection = dbConnect();
    
    try {
    
        $dbConnection->beginTransaction();
        //Update Donor Table
        $sql = 'INSERT INTO donor(fname,lname,email) VALUES(:fName,:lName,:email)';
        $stmt = $dbConnection->prepare($sql);
        $stmt->execute(array(':fName' => $queryJSON['fName'], ':lName' => $queryJSON['lName'], 'email'=>$queryJSON['email']));
        $donorID = $dbConnection -> lastInsertId('donorID');
    
        //Update DonorAddress. set previous addresses to status 0(i.e. inactive) and insert a new record
        $sql = 'UPDATE donoraddress SET status = 0 WHERE donorid = :donorID';
        $stmt = $dbConnection->prepare($sql);
        $stmt->execute(array(':donorID'=>$donorID));
    
        $sql = 'INSERT INTO donoraddress(donorid,address,city,state,zip) VALUES(:donorID,:address,:city,:state,:zip)';
        $stmt = $dbConnection->prepare($sql);
        $stmt->execute(array(':donorID' => $donorID, ':address' => $queryJSON['address'],
                        ':city' => $queryJSON['city'], ':state' => $queryJSON['state'], ':zip' => $queryJSON['zip']));
    
        //Update DonorPhone. Set previous Phones to status 0(i.e. inactive) and insert a new record
        $sql = 'UPDATE donorphone SET status = 0 WHERE donorid = :donorID';
        $stmt = $dbConnection->prepare($sql);
        $stmt->execute(array(':donorID'=>$donorID));
    
        $sql = 'INSERT INTO donorphone(donorid,phone) VALUES(:donorID,:phone)';
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