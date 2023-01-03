<?php
$servername = "localhost";
$username = "root";
$password = "";
try {
$conn = new PDO("mysql:host=$servername;dbname=quizzz", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} 
catch(PDOException $e){}


$arr =array();
$arr1 = array();
$positions = $_GET['arr'];
$result = $_GET['arr2'];
$arr = explode(",",$result);
$thequestions = array();
$arr1 = explode(",",$positions);


if($arr[9])
{
      $savier = array();
      $m = arraydb($arr,$conn);
      // $k = arraycmp($m,$arr1);
     print_r($arr);
     print_r($m);
     print_r($arr1);
}

function arraydb($arr,$conn)
{
  $s = []; 
  $i = 0;
  while($i<count($arr))
  {
    $stmt = $conn->prepare("SELECT `id`, `content_response`, `question_id` FROM `responses` WHERE question_id=? && iscorrect = 1"); 
    $stmt->execute([(int)$arr[$i]]); 
    $row = $stmt->fetch();
    if ($row) 
    {
      array_push($s, $row['content_response']); 
    }
    $i++;
  }
  return $s;
}


$count = 0;
function arraycmp($m,$arr1)
{     
      $i = 0;
      while($i<count($m))
      {
            if($arr1[$i] == $m[$i+1])
            {
                  $count +=1;
            }
            $i++;
      }
   return $count; 
}


// print_r($savier);


function countresult()
{

 
}
if((count($arr)) == 10)
{
      countresult();
}
    








