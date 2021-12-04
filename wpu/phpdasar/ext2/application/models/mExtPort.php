<?php 
defined('BASEPATH') OR exit('No direct script allowed');

class M_ext extends CI_Model{
	public function getEmployee(){
		$data = $this->db->query("SELECT * FROM employee JOIN department on employee.departmentid = department.departmentid JOIN position on employee.positionid = position.positionid");
		return $data->result_array();
	}
}


 ?>