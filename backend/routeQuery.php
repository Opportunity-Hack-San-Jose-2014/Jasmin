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
    "addresses":[{"address":"address1",
                  "city":"SF",
                  "State":"CA",
                  "zip":12222}]
   }]
}
 */
    $response = array();
    $route = array();
    
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
        $result = $stmt ->fetchAll(PDO::FETCH_ASSOC);
        $sql = 'SELECT address,city,state,zip 
                FROM hack.donoraddress da JOIN hack.donation d ON d.donorID = da.donorID
                JOIN hack.donationRoutes dr ON d.donationID = dr.donationID
                WHERE dr.routeID = :routeID
                ORDER BY dr.position ASC';
        for($i=0;$i<count($result);$i++){
            $stmt = $dbConnection->prepare($sql);
            $stmt->execute(array(":routeID"=>$result[$i]['routeID']));
            $addresses = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $route[$i]= array('routeID'=>$result[$i]['routeID'],'dateScheduled'=>date('m-d-Y',strtotime($result[$i]['scheduleDate'])),'addresses'=>$addresses);
        }
        $response['status']=1;
        $response['route']=$route;
        echo json_encode($response);
    }
    catch(PDOException $e){
        $response['status']=0;
        $response['message']=$e->getMessage();
        echo json_encode($response);
    }
?>