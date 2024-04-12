<?php 
namespace App\Controllers;

use App\Http\Request;
use App\Http\Response;
use App\Services\HomeService;

class HomeController{
    public function index() {
        echo "Hello Word!!!";
    }

    public function createController(Request $request, Response $response){
        $body = $request::body();

        $homeService = HomeService::createService($body);

        if(isset($homeService['error'])){
            return $response::json([
                'error' => true,
                'success' => false,
                'message' => $homeService['error']
            ], 400);
        }

        $response::json([
            'error'=> false,
            'success' => true,
            'data' => $homeService
        ], 201);
    }

    public function findAllController(Request $request, Response $response){
        
    }
}
?>