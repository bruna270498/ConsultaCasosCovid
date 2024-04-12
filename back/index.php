<?php 
require_once __DIR__ ."/vendor/autoload.php";
require_once __DIR__ ."/src/Routes/main.php";

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__ . '/..'); // Caminho para a pasta raiz do seu projeto
$dotenv->load();

use App\Core\Core;
use App\Http\Route;

Core::dispatch(Route::routes());
?>