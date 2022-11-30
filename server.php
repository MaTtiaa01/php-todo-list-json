<?php

$tasks = [
    "html",
    "css",
    "javascript",
    "php"
];

header('Content-Type: application/json');
echo json_encode($tasks);
