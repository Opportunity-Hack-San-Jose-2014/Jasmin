<?php
/*
 * Returns JSON containing all the data for a selected query
 * JSON Input
 * {
    "start":"1/1/2014",
    "end":"1/2/2014",
    "zip":12345
}
 * 
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

require_once __DIR__.'/db_config.php';
$dbConnection = dbConnect();
    
try{
    $newStart = date('Y-m-d', strtotime($queryJSON['start']));
    $newEnd = date('Y-m-d', strtotime($queryJSON['end']));
    
    $sql = 'SELECT DISTINCT dr.fname, dr.lname, dr.email, da.address,da.city, da.state, da.zip, dp.phone, dn.status, dn.donationid, dn.dateentered
            FROM donation dn JOIN donationdate dd ON dn.donationid = dd.donationid
            JOIN donor dr ON dn.donorid = dr.donorid
            JOIN donoraddress da ON dr.donorid = da.donorid AND da.status = 1
            JOIN donorphone dp ON dr.donorid = dp.donorid AND dp.status = 1
            WHERE (dn.status=0 OR dn.status=1) AND da.zip = :zip
            AND dd.pickupdate BETWEEN :start AND :end
            ORDER BY dn.dateentered ASC';
    
    $stmt = $dbConnection->prepare($sql);
    $stmt->execute(array(':zip'=>$queryJSON['zip'], ':start'=>$newStart,':end'=>$newEnd));
    $result=$stmt->fetchall(PDO::FETCH_ASSOC);
    $donations=array();
    for($i = 0;$i<count($result);$i++){
        $user=array('fName'=>$result[$i]['fname'],
		'lName'=>$result[$i]['lname'],
		'email'=>$result[$i]['email'],
		'address'=>$result[$i]['address'],
		'city'=>$result[$i]['city'],
		'state'=>$result[$i]['state'],
		'zip'=>$result[$i]['zip'],
		'phone'=>$result[$i]['phone']);
        $sql = 'SELECT a.itemtypeid, itemtype, itemcount, description FROM donationitem a JOIN itemtype b ON a.itemtypeid = b.itemtypeid WHERE donationid = :donationID';
        $stmt = $dbConnection->prepare($sql);
        $stmt -> execute(array(':donationID'=>$result[$i]['donationid']));
        $item = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $sql = 'SELECT pickupdate FROM donationdate WHERE donationid = :donationID';
        $stmt = $dbConnection->prepare($sql);
        $stmt -> execute(array(':donationID'=>$result[$i]['donationid']));
        $oldArray = $stmt->fetchAll(PDO::FETCH_COLUMN,0);
        $pickUpDates = array();
        for($j=0;$j<count($oldArray);$j++){
        $pickUpDates[$j] = date('d-m-Y',strtotime($oldArray[$j]));
        }
        
        $sql = 'SELECT imageURL FROM donationpicture WHERE donationid = :donationID';
        $stmt = $dbConnection->prepare($sql);
        $stmt -> execute(array(':donationID'=>$result[$i]['donationid']));
        $imageURL = $stmt->fetchAll(PDO::FETCH_COLUMN,0);
        
        $donations[$i] = array('item'=>$item,'User'=>$user,'pickUpDates'=>$pickUpDates,'imageURL'=>$imageURL,
                           'donationStatus'=>$result[$i]['status'],'donationCreationDate'=>$result[$i]['dateentered'],'donationID'=>$result[$i]['donationid']);
    }
    $response['queryStatus'] = 1;
    $response['donations'] = $donations;
    echo json_encode($response);
}
catch(PDOException $e){
    $response['queryStatus']=0;
    $response['message']=$e->getMessage();
    echo json_encode($response);
}
?>
