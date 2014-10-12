<?php
/*
 * Returns JSON containing all the data for a selected query
 * JSON Return template:
 * {
"queryStatus":1,
"donations":[{
	"item":[
	{
		"itemTypeID":1,
                "itemType":"couch",
		"count":1,
		"description":"my description"	
	}],
	"User":
	{
		"fName":"Name1",
		"lName":"Name2",
		"email":"email@gmail.com",
		"address":"address 1",
		"city":"SF",
		"state":"CA",
		"zip":"12334",
		"phone":"222-333-4444"
	},
	"pickUpDates":["1/1/1111"],
        "imageURL":["/10_11/1.jpg"],
        "donationStatus":1
}]
}
 */
$queryJSON = json_decode(file_get_contents("php://input"),true);
$response = array();
$dbConnection = new PDO('mysql:dbname = hack;host=localhost;charset=utf8',
"root", "");
$dbConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{
    $newStart = date('Y-m-d', strtotime($queryJSON['start']));
    $newEnd = date('Y-m-d', strtotime($queryJSON['end']));
    
    $sql = 'SELECT DISTINCT dr.fName, dr.lName, dr.email, da.address,da.city, da.state, da.zip, dp.phone, dn.status, dn.donationID, dn.dateEntered
            FROM hack.Donation dn JOIN hack.DonationDates dd ON dn.donationID = dd.donationID
            JOIN hack.Donor dr ON dn.DonorID = dr.DonorID
            JOIN hack.DonorAddress da ON dr.DonorID = da.DonorID AND da.status = 1
            JOIN hack.DonorPhone dp ON dr.DonorID = dp.DonorID AND dp.status = 1
            WHERE (dn.status=0 OR dn.status=1) '/*AND da.zip = :zip
            AND dd.pickUpDate BETWEEN :start AND :end
            ORDER BY dn.dateEntered ASC'*/;
    
    $stmt = $dbConnection->prepare($sql);
    $stmt->execute(array(':zip'=>$queryJSON['zip'], ':start'=>$newStart,':end'=>$newEnd));
    $result=$stmt->fetchall(PDO::FETCH_ASSOC);
    $donations=array();
    for($i = 0;$i<count($result);$i++){
        $user=array('fName'=>$result[$i]['fName'],
		'lName'=>$result[$i]['lName'],
		'email'=>$result[$i]['email'],
		'address'=>$result[$i]['address'],
		'city'=>$result[$i]['city'],
		'state'=>$result[$i]['state'],
		'zip'=>$result[$i]['zip'],
		'phone'=>$result[$i]['phone']);
        
        $sql = 'SELECT a.itemTypeID, itemType, itemCount, description FROM hack.DonationItems a JOIN hack.ItemTypes b ON a.itemTypeID = b.itemTypeID WHERE donationID = :donationID';
        $stmt = $dbConnection->prepare($sql);
        $stmt -> execute(array(':donationID'=>$result[$i]['donationID']));
        $item = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $sql = 'SELECT pickUpDate FROM hack.DonationDates WHERE donationID = :donationID';
        $stmt = $dbConnection->prepare($sql);
        $stmt -> execute(array(':donationID'=>$result[$i]['donationID']));
        $oldArray = $stmt->fetchAll(PDO::FETCH_COLUMN,0);
        $pickUpDates = array();
        for($j=0;$j<count($oldArray);$j++){
        $pickUpDates[$j] = date('d-m-Y',strtotime($oldArray[$j]));
        }
        
        $sql = 'SELECT imageURL FROM hack.DonationPictures WHERE donationID = :donationID';
        $stmt = $dbConnection->prepare($sql);
        $stmt -> execute(array(':donationID'=>$result[$i]['donationID']));
        $imageURL = $stmt->fetchAll(PDO::FETCH_COLUMN,0);
        
        $donations[$i] = array('item'=>$item,'User'=>$user,'pickUpDates'=>$pickUpDates,'imageURL'=>$imageURL,
                           'donationStatus'=>$result[$i]['status'],'donationCreationDate'=>$result[$i]['dateEntered'],'donationID'=>$result[$i]);
    }
    $response['queryStatus'] = 1;
    $response['donations'] = $donations;
    echo json_encode($response);
}
catch(PDOException $e){
    $response['queryStatus']=0;
    echo json_encode($response);
}
?>
