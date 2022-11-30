<?php


$tasksString = file_get_contents('file.json');
//var_dump($tasksString);

$tasksArray = json_decode($tasksString);
var_dump($tasksArray);

header('Content-Type: application/json');
echo json_encode($tasksArray);
