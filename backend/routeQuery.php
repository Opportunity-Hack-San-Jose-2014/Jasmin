<?php
//Creates an entry for a user in the database
/* No input
 * JSON Output
 * {
   "status":1,
    "route":[
   {
    "routeID":1,
    "dateScheduled":"12/12/2014",
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
        "imageURL":["/10_11/1.jpg"]
    }]
   }]
}
 */
    $response = array();
    
    $dbConnection = new PDO('mysql:dbname = hack;host=localhost;charset=utf8',
    "root", "");
    $dbConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    try {
        //Select routeID's, address', and dateScheduled in ascending position
        $sql = 'SELECT r.routeID, r.scheduleDate
                FROM  hack.route r
                WHERE r.scheduleDate > NOW()
                ORDER BY r.routeID,r.scheduleDate ASC';
        $stmt = $dbConnection->prepare($sql);
        $stmt-> execute();
        $route = $stmt ->fetchAll(PDO::FETCH_ASSOC);
        $routes = array();
        for($i=0;$i<count($route);$i++){
            $sql = 'SELECT fName,lName,email,address,city,state,zip,phone, dr.donationID
                    FROM hack.donoraddress da JOIN hack.donation d ON d.donorID = da.donorID
                    JOIN hack.donationRoutes dr ON d.donationID = dr.donationID
                    JOIN hack.donor dn ON dn.donorID = d.donorID
                    JOIN hack.donorphone dp ON dn.donorID = dp.donorID
                    WHERE dr.routeID = :routeID
                    ORDER BY dr.position ASC';
            $stmt = $dbConnection->prepare($sql);
            $stmt->execute(array(":routeID"=>$route[$i]['routeID']));
            $donation = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $donations=array();
            for($j=0;$j<count($donation);$j++)
            {
                $user=array('fName'=>$donation[$j]['fName'],
                    'lName'=>$donation[$j]['lName'],
                    'email'=>$donation[$j]['email'],
                    'address'=>$donation[$j]['address'],
                    'city'=>$donation[$j]['city'],
                    'state'=>$donation[$j]['state'],
                    'zip'=>$donation[$j]['zip'],
                    'phone'=>$donation[$j]['phone']);
                $sql = 'SELECT imageURL FROM hack.DonationPictures WHERE donationID = :donationID';
                $stmt = $dbConnection->prepare($sql);
                $stmt -> execute(array(':donationID'=>$donation[$j]['donationID']));
                $imageURL = $stmt->fetchAll(PDO::FETCH_COLUMN,0);

                $sql = 'SELECT a.itemTypeID, itemType, itemCount, description FROM hack.DonationItems a JOIN hack.ItemTypes b ON a.itemTypeID = b.itemTypeID WHERE donationID = :donationID';
                $stmt = $dbConnection->prepare($sql);
                $stmt -> execute(array(':donationID'=>$donation[$j]['donationID']));
                $item = $stmt->fetchAll(PDO::FETCH_ASSOC);

                $donations[$j] = array('item'=>$item,'User'=>$user,'imageURL'=>$imageURL,'donationID'=>$donation[$j]);
            }
            $routes[$i]=array('routeID'=>$route[$i]['routeID'],'dateScheduled'=>date('m-d-Y',strtotime($route[$i]['scheduleDate'])),'donations'=>$donations);
        }
        $response['status']=1;
        $response['route']=$routes;
        echo json_encode($response);
    }
    catch(PDOException $e){
        $response['status']=0;
        $response['message']=$e->getMessage();
        echo json_encode($response);
    }
?>