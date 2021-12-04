<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_phoneext extends CI_Model{
	public function mis(){
		// $datamis = $this->db->query(
		// 	"SELECT employee.name, department.department, ext.ext, position.position, yard.location 
		// 		FROM employee 
		// 		JOIN department on employee.departmentid = department.departmentid 
		// 		JOIN ext on employee.extid = ext.extid 
		// 		JOIN position on employee.positionid = position.positionid 
		// 		JOIN yard on employee.yardid = yard.yardid WHERE employee.departmentid = 1");

		// $datamis = $this->db->query(
		// 	"SELECT department.department, employee.name, position.position, ext.ext, yard.location
		// 	FROM department
		// 	LEFT JOIN employee on department.employeeid = employee.id
		// 	LEFT JOIN position on department.positionid = position.positionid
		// 	LEFT JOIN ext on department.extid = ext.extid
		// 	LEFT JOIN yard on department.yardid = yard.yardid"
		// );

		$datamis = $this->db->query(
			"SELECT yard.location, department.department, employee.name, ext.ext, position.position 
				FROM employee 
				LEFT JOIN department on employee.departmentid = department.departmentid 
				JOIN ext on employee.extid = ext.extid 
				JOIN position on employee.positionid = position.positionid 
				JOIN yard on employee.yardid = yard.yardid"
		);
		
		return $datamis->result_array();
	}
}


?>