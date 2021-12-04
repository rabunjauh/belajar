<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class C_tes extends CI_Controller {

	public function index() {
		// $table1 = $this->db->query(
		// 	"SELECT employee.name, department.department, ext.ext, position.position, yard.location 
		// 		FROM employee 
		// 		JOIN department on employee.departmentid = department.departmentid 
		// 		JOIN ext on employee.extid = ext.extid 
		// 		JOIN position on employee.positionid = position.positionid 
		// 		JOIN yard on employee.yardid = yard.yardid WHERE employee.departmentid = 1");

		// $table2 = $this->db->query(
		// 	"SELECT employee.name, department.department, ext.ext, position.position, yard.location 
		// 		FROM employee 
		// 		JOIN department on employee.departmentid = department.departmentid 
		// 		JOIN ext on employee.extid = ext.extid 
		// 		JOIN position on employee.positionid = position.positionid 
		// 		JOIN yard on employee.yardid = yard.yardid WHERE employee.departmentid = 2");


		// if ($table1 == true) {
		// 	$ext = $table1;
		// }


		$ext = $this->load->model('m_phoneext');
		$ext = $this->m_phoneext->mis();
		$ext = array('datamis' => $datamis);
				
		var_dump($datamis);exit;




		$this->load->view('v_phoneext', $ext);





		// $this->load->view('v_phoneext', $table);


	}

}

?>