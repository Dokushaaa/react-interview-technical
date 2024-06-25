<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Users.php';

$conn = null;
$conn = checkDbConnection();

$users = new Users($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("usersid", $_GET)) {

        checkPayload($data);
        $users->users_aid = $_GET['usersid'];
        $users->users_is_active = trim($data["isActive"]);
        $users->users_datetime = date("Y-m-d H:i:s");
        checkId($users->users_aid);
        $query = checkActive($users);
        http_response_code(200);
        returnSuccess($users, "users", $query);
    }
    checkEndpoint();
}



http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();