<?php
$conn = null;
$conn = checkDbConnection();
$users = new Users($conn);
if (array_key_exists("usersid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$users->users_workid = checkIndex($data, "users_workid");
$users->users_fname = checkIndex($data, "users_fname");
$users->users_mname = checkIndex($data, "users_mname");
$users->users_sname = checkIndex($data, "users_sname");
$users->users_email = checkIndex($data, "users_email");
$users->users_manager = checkIndex($data, "users_manager");
$users->users_is_active = checkIndex($data, "users_is_active");
$users->users_created = date("Y-m-d H:i:s");
$users->users_datetime = date("Y-m-d H:i:s");

// isNameExist($users, $users->users_name);

$query = checkCreate($users);
returnSuccess($users," users", $query);

