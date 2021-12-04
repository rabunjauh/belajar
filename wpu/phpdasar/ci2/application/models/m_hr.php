<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class m_hr extends CI_Model{
	public function hr(){
		$datahr = $this->db->query(
			"SELECT employee.name, department.department, ext.ext, position.position, yard.location 
				FROM employee 
				JOIN department on employee.departmentid = department.departmentid 
				JOIN ext on employee.extid = ext.extid 
				JOIN position on employee.positionid = position.positionid 
				JOIN yard on employee.yardid = yard.yardid WHERE employee.departmentid = 2");
		return $datahr->result_array();
	}
}
?>