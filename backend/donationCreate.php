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
$dbConnection = new PDO('mysql:dbname = hack;host=localhost;charset=utf8',
"root", "");
$dbConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{
    $dbConnection->beginTransaction();
    $sql = 'SELECT DonorID FROM hack.Donor WHERE email=:email';
    $stmt = $dbConnection->prepare($sql);
    $stmt->execute(array(':email'=>$queryJSON['email']));
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    $donorID = $result['DonorID'];
    
    if(!$result){
        $url="userCreate.php";
        $myPost=json_encode($queryJSON['user']);
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_HEADER, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HTTPHEADER,
        array("Content-type: application/json"));
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $myPost);
        $response = curl_exec($curl);
        $asdf=json_decode($response,true);
        $donorID=$asdf['donorID'];
    }
    
    $sql = 'INSERT INTO hack.Donation(donorID,status) VALUES(:donorID,:status)';
    $stmt = $dbConnection->prepare($sql);
    $stmt->execute(array(':donorID'=>$donorID,':status'=>$queryJSON['donationStatus']));
    $donationID = $dbConnection -> lastInsertId('donationID');
    
    $sql = 'INSERT INTO hack.DonationItems(donationID,itemcount,itemTypeID,description) VALUES (:donationID,:itemcount,:itemTypeID,:description)';
    foreach($queryJSON['item'] as $item)
    {
        $stmt=$dbConnection->prepare($sql);
        $stmt->execute(array(':donationID'=>$donationID,':itemcount'=>$item['count'],
                        ':itemTypeID'=>$item['itemTypeID'],':description'=>$item['description']));
    }
    unset($item);
    
    $sql = 'INSERT INTO hack.DonationDates(donationID,pickUpDate) VALUES(:donationID,:pickUpDate)';
    foreach($queryJSON['pickUpDates'] as $date)
    {
        $newDate = date('Y-m-d', strtotime($date));
        $stmt=$dbConnection->prepare($sql);
        $stmt->execute(array(':donationID'=>$donationID,':pickUpDate'=>$newDate));        
    }
    unset($date);
    
    $sql = 'INSERT INTO hack.DonationPictures(donationID,imageURL) VALUES(:donationID,:imageURL)';
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
