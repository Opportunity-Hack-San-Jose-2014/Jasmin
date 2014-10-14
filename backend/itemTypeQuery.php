<?php
/*
 * Returns JSON containing all item types (i.e. ItemTypeID = 0, ItemType = 'Couch')
 {
    "status":1,
    "item":[{
        "itemType":"couch",
        "itemTypeID":1
    }]
}
 */
$response = array();    
require_once __DIR__.'/db_config.php';
$dbConnection = dbConnect();

try{
    $sql = 'SELECT * FROM itemtype';
    $stmt = $dbConnection->prepare($sql);
    $stmt->execute();
    $itemTypeList = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $response['items'] = $itemTypeList;
    $response['status']=1;
    echo json_encode($response);
}
catch(PDOException $e){
    $response['status']=0;
    $response['message']=$e->getMessage();
    echo json_encode($response);
}
?>
