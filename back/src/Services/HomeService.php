<?php 
namespace App\Services;

use App\Utils\Validator;

class HomeService{
    public static function createService(array $data) {
        try {
            $fields = Validator::validate([
                'date' => $data['date'],
                'hour' => $data['hour'],
                'country' => $data['country']
            ]);
            return $fields;
        } catch (\Exception $th) {
            return ['error' => $th->getMessage()];
        }
    }
}

?>