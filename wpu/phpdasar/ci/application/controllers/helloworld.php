<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Helloworld extends CI_Controller {

	public function index() {
		$this->load->view('hello_view');
	}

	public function fungsi() {
		echo "Function fungsi dari Controller Helloworld";
	}

	public function parameter($nama) {
		echo "Selamat Datang " . $nama;
	}
}
