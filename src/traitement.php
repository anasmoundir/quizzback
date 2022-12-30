<?php 
$servername = "localhost";
$username = "root";
$password = "";

try {
  $conn = new PDO("mysql:host=$servername;dbname=quizzz", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

$bb =array();
$sql = "SELECT * FROM `questions`";
$result = $conn-> query($sql);
$rows = $result -> fetchAll(PDO::FETCH_ASSOC);
$ss = [];
foreach($rows as $row)
{
array_push($ss,$row['content']); 


$variable = $row['id'];
$query = "SELECT distinct content as content FROM responses where question_id = $variable";
$result1 = $conn-> query($query);
$data = $result1 -> fetchAll(PDO::FETCH_ASSOC);
foreach($data as $data)
{
array_push($ss,$data['content']); 
}
}
session_start();
$_SESSION['question']="";
$result = array_merge($_SESSION,$ss);
var_dump($_SESSION['question']);




///
echo '<pre>';
print_r($ss);
echo '</pre>';

$fp = fopen('./question.json','w');
    fwrite($fp, json_encode($ss));
    fclose($fp);






$data  = date("y-m-d");







?>