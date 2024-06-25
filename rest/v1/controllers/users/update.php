<?php
$conn = null;
$conn = checkDbConnection();
$users = new Users($conn);
$error = [];
$returnData = [];
if (array_key_exists("usersid", $_GET)) {
    checkPayload($data);
     $users->users_aid = $_GET['usersid'];
    $users->users_workid = checkIndex($data, "users_workid");
    $users->users_fname = checkIndex($data, "users_fname");
    $users->users_mname = checkIndex($data, "users_mname");
    $users->users_sname = checkIndex($data, "users_sname");
    $users->users_email = checkIndex($data, "users_email");
    $users->users_manager = checkIndex($data, "users_manager");
    $users->users_is_active = checkIndex($data, "users_is_active");
    $users->users_datetime = date("Y-m-d H:i:s");
    //
    $query = checkUpdate($users);
    returnSuccess($users, "users", $query);
}
checkEndpoint();