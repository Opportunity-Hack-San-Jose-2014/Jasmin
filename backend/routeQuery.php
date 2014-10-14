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
        
    require_once __DIR__.'/db_config.php';
    $dbConnection = dbConnect();
    
    try {
        //Select routeID's, address', and dateScheduled in ascending position
        $sql = 'SELECT routeid, scheduledate
                FROM  route
                WHERE scheduledate > NOW()
                ORDER BY scheduledate ASC';
        $stmt = $dbConnection->prepare($sql);
        $stmt-> execute();
        $route = $stmt ->fetchAll(PDO::FETCH_ASSOC);
        $routes = array();
        for($i=0;$i<count($route);$i++){
            $sql = 'SELECT fname,lname,email,address,city,state,zip,phone, dr.donationid
                    FROM donoraddress da JOIN donation d ON d.donorid = da.donorid
                    JOIN donationroute dr ON d.donationid = dr.donationid
                    JOIN donor dn ON dn.donorid = d.donorid
                    JOIN donorphone dp ON dn.donorid = dp.donorid
                    WHERE dr.routeid = :routeID
                    ORDER BY dr.position ASC';
            $stmt = $dbConnection->prepare($sql);
            $stmt->execute(array(":routeID"=>$route[$i]['routeid']));
            $donation = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $donations=array();
            for($j=0;$j<count($donation);$j++)
            {
                $user=array('fName'=>$donation[$j]['fname'],
                    'lName'=>$donation[$j]['lname'],
                    'email'=>$donation[$j]['email'],
                    'address'=>$donation[$j]['address'],
                    'city'=>$donation[$j]['city'],
                    'state'=>$donation[$j]['state'],
                    'zip'=>$donation[$j]['zip'],
                    'phone'=>$donation[$j]['phone']);
                $sql = 'SELECT imageurl FROM donationpicture WHERE donationid = :donationID';
                $stmt = $dbConnection->prepare($sql);
                $stmt -> execute(array(':donationID'=>$donation[$j]['donationid']));
                $imageURL = $stmt->fetchAll(PDO::FETCH_COLUMN,0);

                $sql = 'SELECT a.itemtypeid, itemtype, itemcount, description FROM donationitem a JOIN itemtype b ON a.itemtypeid = b.itemtypeid WHERE donationid = :donationID';
                $stmt = $dbConnection->prepare($sql);
                $stmt -> execute(array(':donationID'=>$donation[$j]['donationid']));
                $item = $stmt->fetchAll(PDO::FETCH_ASSOC);

                $donations[$j] = array('item'=>$item,'User'=>$user,'imageURL'=>$imageURL,'donationID'=>$donation[$j]);
            }
            $routes[$i]=array('routeID'=>$route[$i]['routeid'],'dateScheduled'=>date('m-d-Y',strtotime($route[$i]['scheduledate'])),'donations'=>$donations);
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