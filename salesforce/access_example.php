<?php
// SOAP_CLIENT_BASEDIR - folder that contains the PHP Toolkit and your WSDL
// $USERNAME - variable that contains your Salesforce.com username (must be in the form of an email)
// $PASSWORD - variable that contains your Salesforce.ocm password

define("SOAP_CLIENT_BASEDIR", "../../soapclient");
require_once (SOAP_CLIENT_BASEDIR.'/SforcePartnerClient.php');
require_once ('../userAuth.php');


try {
  $mySforceConnection = new SforcePartnerClient();
  $mySoapClient = $mySforceConnection->createConnection(SOAP_CLIENT_BASEDIR.'/partner.wsdl.xml');
  $mylogin = $mySforceConnection->login($USERNAME, $PASSWORD);

  $header = new AssignmentRuleHeader('01Q300000005lDg', false);
  $mySforceConnection->setAssignmentRuleHeader($header);

  $createFields = array (
  'FirstName' => 'John',
  'LastName' => 'Doe',
  'Email' => 'johndoe@salesforce.com',
  'Company' => 'Some Company',
  'LeadSource' => 'PHPUnit2',
  'City' => 'Tokyo',
  'Country' => 'Japan'
  );
  $sObject1 = new SObject();
  $sObject1->fields = $createFields;
  $sObject1->type = 'Lead';

  try {
    $createResponse = $mySforceConnection->create(array ($sObject1));
    print_r($createResponse);
  } catch (SoapFault $fault) {
    $this->fail($fault->faultstring);
  }
}catch (Exception $ex) {
  echo $mySforceConnection->getLastRequest();
  print_r($ex);
}
?>