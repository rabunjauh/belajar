<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id="top">
  	<div class="container">
	    <a class="navbar-brand" href="<?php base_url(); ?>">Java Web Media</a>
	    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
	      <span class="navbar-toggler-icon"></span>
	    </button>
	    <div class="collapse navbar-collapse" id="navbarCollapse">
	      <ul class="navbar-nav mr-auto">
	        <li class="nav-item active">
	          <a class="nav-link" href="<?php base_url(); ?>">Home <span class="sr-only">(current)</span></a>
	        </li>
	        <li class="nav-item dropdown">
		        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          Berita
		        </a>
		        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
		          <a class="dropdown-item" href="<?php echo base_url('berita'); ?>">Halaman Berita</a>
		          <a class="dropdown-item" href="<?php echo base_url('berita/read'); ?>">Detail Berita</a>
		        </div>
      		</li>
	        <li class="nav-item">
	          <a class="nav-link" href="<?php echo base_url('layanan'); ?>">Services</a>
	        </li>
	        <li class="nav-item">
	          <a class="nav-link" href="<?php echo base_url('profil'); ?>">Profile</a>
	        </li>
	        <li class="nav-item">
	          <a class="nav-link" href="<?php echo base_url('kontak') ?>">Contact</a>
	        </li>
	      </ul>
	      <form class="form-inline mt-2 mt-md-0">
	        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
	        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
	      </form>
	    </div>
    </div>
  </nav>

