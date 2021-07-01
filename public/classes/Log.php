<?php


namespace Palasthotel\PostToMailchimp;

use Exception;

class Log {
	public static function write($fn){
		if(function_exists("process_log_write")){
			try{
				process_log_write($fn);
			} catch (Exception $e){
				error_log($e->getMessage());
			}
		}
	}
}