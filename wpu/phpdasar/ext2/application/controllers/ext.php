<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ext extends CI_Controller {

	public function index()
	{
		$data = $this->load->model('m_ext');
		$data = $this->m_ext->getEmployee();
		$data = array ('data' => $data);
		$this->load->view('v_ext', $data);
	}
}
 