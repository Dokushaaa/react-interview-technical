<?php
$conn = null;
$conn = checkDbConnection();
$users = new Users($conn);

$error = [];
$returnData = [];
if (array_key_exists("usersid", $_GET)) {
    $users->users_aid = $_GET['usersid'];
    checkId($users->users_aid);
    $query = checkDelete($users);
    returnSuccess($users, "users", $query);
}

checkEndpoint();