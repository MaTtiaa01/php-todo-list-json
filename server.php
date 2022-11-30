<?php



$tasksString = file_get_contents('file.json');
//var_dump($tasksString);

$tasksArray = json_decode($tasksString);
//var_dump($tasksArray);


if (isset($_POST['task'])) {

    $newTask = $_POST['task'];
    //var_dump($newTask);

    array_push($tasksArray, $newTask);

    $jsonTask = json_encode($tasksArray);

    file_put_contents('file.json', $jsonTask);
};




header('Content-Type: application/json');
echo json_encode($tasksArray);
