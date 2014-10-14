<html>
<head>
<title>Testing</title>
</head>
<body>
<p>
<?php
$url = 'http://localhost/hackathon-mockup/userCreate.php';
//$url = 'http://localhost/hackathon-mockup/donationCreate.php';
//$url = 'http://localhost/hackathon-mockup/donationQuery.php';
//$url = 'http://localhost/hackathon-mockup/donationStatusUpdate.php';
//$url = 'http://localhost/hackathon-mockup/routeCreate.php';
//$url = 'http://localhost/hackathon-mockup/routeQuery.php';//no input JSON
//$url = 'http://localhost/hackathon-mockup/routeUpdate.php';
//$url = 'http://localhost/hackathon-mockup/itemTypeQuery.php';//no input JSON

//donationCreate JSON
/*
            	$item=array(
		array("itemTypeID"=>0,
		"count"=>3,
		"description"=>"asdf"),
		array("itemTypeID"=>1,
		"count"=>4,
		"description"=>"asdf1"));
        $user=array(	
		"fName"=>"Name1",
		"lName"=>"Name2",
		"email"=>"email2@gmail.com",
		"address"=>"address 1",
		"city"=>"SF",
		"state"=>"CA",
		"zip"=>"12334",
		"phone"=>"222-333-4444");
	$pickUpDates=  array("9/5/2014","12/12/2014");
        $imageURL = array("10_01/billy.jpg","10_01/billy1.jpg","10_01/billy2.jpg");
        $status=0;
$testing = array("item"=>$item,"email"=>"email2@gmail.com","user"=>$user,"pickUpDates"=>$pickUpDates,"donationStatus"=>$status,'imageURL'=>$imageURL);*/

//userCreate JSON
$testing = array(	
		"fName"=>"Billy",
		"lName"=>"Bob",
		"email"=>"billybob@gmail.com",
		"address"=>"123 Billy Bob Lane",
		"city"=>"Billy",
		"state"=>"CA",
		"zip"=>"12334",
		"phone"=>"123-456-7890");/**/

//donationQuery JSON
/*$testing = array(
    "start"=>"9/4/2014",
    "end"=>"12/13/2014",
    "zip"=>12334
);*/

//donationUpdate JSON
/*$testing = array("donationID"=>17,
             "donationStatus"=>2);*/

//routeCreate JSON
//$testing = array("scheduleDate"=>"10/12/2014","donationID"=>[5,3,4]);

//routeUpdate JSON
//$testing = array("routeID"=>1,"donationID"=>5);

$myPost = json_encode($testing);

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER,
        array("Content-type: application/json"));
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $myPost);

$response = curl_exec($curl);
/*$status = curl_getinfo($curl, CURLINFO_HTTP_CODE);

if ( $status != 201 ) {
    die("Error: call to URL $url failed with status $status, response $json_response, curl_error " . curl_error($curl) . ", curl_errno " . curl_errno($curl));
}
curl_close($curl);*/
echo $response;
?> 
</p>
</body>
</html>