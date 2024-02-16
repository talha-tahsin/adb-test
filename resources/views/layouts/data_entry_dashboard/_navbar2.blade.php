

<!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light" style="margin-left: 0px;">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
    <li class="nav-item d-none d-sm-inline-block">
        <!-- <img src="{{ asset('dist/img/cegis_namplate.png') }}" alt="Logo" class="elevation-3" height="35" width="220" style="opacity: .8;padding-top: 4px;"> -->
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <h3 style="padding: 3px 0px 0px 0px;"><strong>Center for Enviromental and Geographic Information Services (CEGIS)</strong></h3>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <!-- <a href="{{ route('dashboard') }}" class="nav-link">Watershed Dashboard</a> -->
      </li>
      <li class="nav-item d-none d-sm-inline-block" style="margin: 8px 0px 0px 0px;">
        <!-- <a href="#" class="nav-link">Contact</a> -->
        <span style="color: red;"></span>
        
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
   
      <!-- Navbar Search -->
      <!-- <li class="nav-item">
        <a class="nav-link" data-widget="navbar-search" href="#" role="button">
          <i class="fas fa-search"></i>
        </a>
        <div class="navbar-search-block">
          <form class="form-inline">
            <div class="input-group input-group-sm">
              <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
              <div class="input-group-append">
                <button class="btn btn-navbar" type="submit">
                  <i class="fas fa-search"></i>
                </button>
                <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li> -->


      <ul class="navbar-nav ms-auto">
      <!-- Authentication Links -->
        <li class="nav-item dropdown">
            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
              <img src="{{ asset('dist/img/444.png') }}" alt="log_out" height="20" width="20">
              {{ Auth::user()->name }}
            </a>

            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="{{ route('logout') }}"
                   onclick="event.preventDefault();
                                 document.getElementById('logout-form').submit();">
                    {{ __('Logout') }}
                </a>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                    @csrf
                </form>
            </div>
        </li>
      </ul>
  

    </ul>
  </nav>
  <!-- end /.navbar -->