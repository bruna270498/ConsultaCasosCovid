<?php 
namespace App\Models;

use PDO;

class Database{
    public function getConnection(){
        $host = getenv('DB_HOST');
        $dbname = getenv('DB_DATABASE');
        $username = getenv('DB_USER');
        $password = getenv('DB_PASSWORD');
        $port = getenv('DB_PORT');
        
        $pdo = new PDO("mysql:host=$host;port=$port, dbname=$dbname", $username, $password);
    }
}
?>