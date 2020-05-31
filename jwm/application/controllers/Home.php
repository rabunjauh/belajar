<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
	// MainPage
	public function index()
	{
		$data = [
					'title' => 'Java Web Media',
					'isi' => 'home/list'
		];
		$this->load->view('layout/wrapper', $data, FALSE);
	}

}

/* End of file Home.php */
/* Location: ./application/controllers/Home.php */