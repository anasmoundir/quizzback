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

$questions = array();

$sql = "SELECT q.id, q.content, q.exp, r.content_response
        FROM questions q, responses r 
        WHERE q.id = r.question_id";
$stmt = $conn->prepare($sql);
$stmt-> execute();

$data = $stmt->fetchAll();

foreach($data as $row) 
{
    $questions[$row['id']]['question'] = $row['content'];
    $questions[$row['id']]['the explication'] = $row['exp'];
    $questions[$row['id']]['answers'][] = $row['content_response'];
}

var_dump($questions);

$questions_json = json_encode($questions);




$fp = fopen('./question.json','w');
    fwrite($fp, json_encode($questions_json));
    fclose($fp);













?>