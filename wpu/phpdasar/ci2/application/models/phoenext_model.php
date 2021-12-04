<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Phoneext_model extends CI_Model{
	public function mis(){
		$data = $this->db->query("SELECT * FROM employee");
		return $data->result_array();		
	}
}
?>