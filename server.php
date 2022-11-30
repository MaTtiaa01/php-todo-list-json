<?php

$tasksString = file_get_contents('file.json');

$tasksArray = json_decode($tasksString);

echo $tasksArray;
