<?php
$username = "postgres";
$password = "postgres";

$db = new PDO('pgsql:host=localhost; port=5432; dbname=finalProject;', $username, $password);
$sql = $db->prepare("SELECT * FROM uhi2016");
$sql->execute();

$features = [];
while($row = $sql->fetch(PDO::FETCH_ASSOC)){
    $feature = ['type'=>'Feature'];
    $feature['geometry'] = json_decode($row['geom']);
    unset($row['geom']);
    $feature['properties'] = $row;
    array_push($features,$feature);
}

$featureCollection = ['type'=>'FeatureCollection','features'=>$features];
echo json_encode($featureCollection);
?>