<?php

Class Users {
    public $users_aid;
    public $users_workid;
    public $users_fname;
    public $users_mname;
    public $users_sname;
    public $users_email;
    public $users_manager;
    public $users_is_active;
    public $users_created;
    public $users_datetime;

    public $users_search;
    public $connection;
    public $lastInsertedId;
    public $tblusers;

    public function __construct($db) {
        $this->connection = $db;
        $this->tblusers = "tbl_users";
    }

    public function create() {
        try {
             $sql = "insert into {$this->tblusers} ";
             $sql .= "( users_workid, ";
             $sql .= "users_fname, ";
             $sql .= "users_mname, ";
             $sql .= "users_sname, ";
             $sql .= "users_email, ";
             $sql .= "users_manager, ";
             $sql .= "users_is_active, ";
             $sql .= "users_created, ";
             $sql .= "users_datetime ) values ( ";
             $sql .= ":users_workid, ";
             $sql .= ":users_fname, ";
             $sql .= ":users_mname, ";
             $sql .= ":users_sname, ";
             $sql .= ":users_email, ";
             $sql .= ":users_manager, ";
             $sql .= ":users_is_active, ";
             $sql .= ":users_created, ";
             $sql .= ":users_datetime ) ";
             $query = $this->connection->prepare($sql);
             $query->execute([
                "users_workid" => $this->users_workid,
                "users_fname" => $this->users_fname,
                "users_mname" => $this->users_mname,
                "users_sname" => $this->users_sname,
                "users_email" => $this->users_email,
                "users_manager" => $this->users_manager,
                "users_is_active" => $this->users_is_active,
                "users_created" => $this->users_created,
                "users_datetime" => $this->users_datetime,
             ]);
        $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        
        return $query;
    }
    
    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblusers} ";
            $sql .= "order by users_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblusers} ";
            $sql .= "where users_aid = :users_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "users_aid" => $this->users_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function update()
    {
        try {
            $sql = "update {$this->tblusers} set ";
            $sql .= "users_workid = :users_workid, ";
            $sql .= "users_fname = :users_fname, ";
            $sql .= "users_mname = :users_mname, ";
            $sql .= "users_sname = :users_sname, ";
            $sql .= "users_email = :users_email, ";
            $sql .= "users_manager = :users_manager, ";
            $sql .= "users_datetime = :users_datetime, ";
            $sql .= "users_is_active = :users_is_active ";
            $sql .= "where users_aid = :users_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "users_workid" => $this->users_workid,
                "users_fname" => $this->users_fname,
                "users_mname" => $this->users_mname,
                "users_sname" => $this->users_sname,
                "users_email" => $this->users_email,
                "users_manager" => $this->users_manager,
                "users_datetime" => $this->users_datetime,
                "users_is_active" => $this->users_is_active,
                "users_aid" => $this->users_aid,
         
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function active()
    {
        try {
            $sql = "update {$this->tblusers} set ";
            $sql .= "users_is_active = :users_is_active, ";
            $sql .= "users_datetime = :users_datetime ";
            $sql .= "where users_aid  = :users_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "users_is_active" => $this->users_is_active,
                "users_datetime" => $this->users_datetime,
                "users_aid" => $this->users_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblusers} ";
            $sql .= "where users_email like :users_email ";
            $sql .= "order by users_is_active desc, ";
            $sql .= "users_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "users_aid" => "%{$this->users_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}