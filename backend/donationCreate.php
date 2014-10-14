<?php
//Creates a new donation entry.
/*JSON Input Format
 * {
    "item":[
    {
            "itemTypeID":0,
            "count":1,
            "description":"my description"	
    }],
    "user":{
        "fName":"Name1",
        "lName":"Name2",
        "email":"email@gmail.com",
        "address":"address 1",
        "city":"SF",
        "state":"CA",
        "zip":"12334",
        "phone":"222-333-4444"
    },
    "imageURL":["/10_11/1.jpg"],
    "email":"email@gmail.com",
    "pickUpDates":["1/1/1111"],
    "donationStatus":1
}*/

$queryJSON = json_decode(file_get_contents("php://input"),true);
$response=array();

require_once __DIR__.'/db_config.php';
$dbConnection = dbConnect();

try{
    $dbConnection->beginTransaction();
    $sql = 'SELECT donorid FROM donor WHERE email=:email';
    $stmt = $dbConnection->prepare($sql);
    $stmt->execute(array(':email'=>$queryJSON['email']));
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    $donorID = $result['donorid'];
    if(!$result){
        $url="userCreate.php";
        $myPost=$queryJSON['user'];

        //Update Donor Table
        $sql = 'INSERT INTO donor(fName,lName,email) VALUES(:fName,:lName,:email)';
        $stmt = $dbConnection->prepare($sql);
        $stmt->execute(array(':fName' => $myPost['fName'], ':lName' => $myPost['lName'], 'email'=>$myPost['email']));
        $donorID = $dbConnection -> lastInsertId('donorID');

        //Update DonorAddress. set previous addresses to status 0(i.e. inactive) and insert a new record
        $sql = 'UPDATE donoraddress SET status = 0 WHERE donorID = :donorID';
        $stmt = $dbConnection->prepare($sql);
        $stmt->execute(array(':donorID'=>$donorID));

        $sql = 'INSERT INTO donoraddress(donorid,address,city,state,zip) VALUES(:donorID,:address,:city,:state,:zip)';
        $stmt = $dbConnection->prepare($sql);
        $stmt->execute(array(':donorID' => $donorID, ':address' => $myPost['address'],
            ':city' => $myPost['city'], ':state' => $myPost['state'], ':zip' => $myPost['zip']));

        //Update DonorPhone. Set previous Phones to status 0(i.e. inactive) and insert a new record
        $sql = 'UPDATE donorphone SET status = 0 WHERE donorID = :donorID';
        $stmt = $dbConnection->prepare($sql);
        $stmt->execute(array(':donorID'=>$donorID));

        $sql = 'INSERT INTO donorphone(donorID,phone) VALUES(:donorID,:phone)';
        $stmt = $dbConnection->prepare($sql);
        $stmt->execute(array(':donorID' => $donorID, ':phone' => $myPost['phone']));

    }
    
    $sql = 'INSERT INTO donation(donorid,status) VALUES(:donorID,:status)';
    $stmt = $dbConnection->prepare($sql);
    $stmt->execute(array(':donorID'=>$donorID,':status'=>$queryJSON['donationStatus']));
    $donationID = $dbConnection -> lastInsertId('donationID');
    
    $sql = 'INSERT INTO donationitem(donationid,itemcount,itemtypeid,description) VALUES (:donationID,:itemcount,:itemTypeID,:description)';
    foreach($queryJSON['item'] as $item)
    {
        $stmt=$dbConnection->prepare($sql);
        $stmt->execute(array(':donationID'=>$donationID,':itemcount'=>$item['count'],
                        ':itemTypeID'=>$item['itemTypeID'],':description'=>$item['description']));
    }
    unset($item);
    
    $sql = 'INSERT INTO donationdate(donationid,pickupdate) VALUES(:donationID,:pickUpDate)';
    foreach($queryJSON['pickUpDates'] as $date)
    {
        $newDate = date('Y-m-d', strtotime($date));
        $stmt=$dbConnection->prepare($sql);
        $stmt->execute(array(':donationID'=>$donationID,':pickUpDate'=>$newDate));        
    }
    unset($date);
    
    $sql = 'INSERT INTO donationpicture(donationid,imageurl) VALUES(:donationID,:imageURL)';
    foreach($queryJSON['imageURL'] as $imageURL)
    {
        $stmt=$dbConnection->prepare($sql);
        $stmt->execute(array(':donationID'=>$donationID,':imageURL'=>$imageURL));        
    }
    unset($imageURL);
    
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
