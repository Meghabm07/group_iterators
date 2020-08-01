function header() {
    var header = `
                <nav class="navbar top__navbar navbar-expand-lg">
                    <div class="container">
                        <div class="d-flex w-100 pl-3">
                            <div class="p-2 trending">Trending</div>
                            <div class="p-2 trending__content">Why the ODI Super League creates a fairer path to World Cups</div>
                            <div class="ml-auto p-2 mr-2 pr-3 today" id="today">
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="container">
                    <div class="row pl-3 pr-3">
                        <div class="col-lg-4 col-md-6 col-sm-4">
                            <a class="navbar-brand" href="#">
                                <img src="./assets/images/logo.png" alt="logo" />
                            </a>
                        </div>
                        <div class="col-lg-8 col-md-6 col-sm-8 advertise__banner__div d-flex justify-content-end align-items-center pr-0">
                            <div class="advertise__banner" href="#">
                                <img src="./assets/images/addbanner1.png" alt="logo" />
                            </div>
                        </div>
                    </div>
                    <nav class = "navbar bottom__navbar navbar-expand-lg" >
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bottomNavBar" aria-controls="bottomNavBar" aria-expanded="false" aria-label="Toggle navigation">
                           <i class="fa fa-bars text__white__color" aria-hidden="true"></i>
                        </button>

                        <div class="collapse navbar-collapse" id="bottomNavBar">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Home </a>
                                </li>
                                 <li class="nav-item">
                                    <a class="nav-link" href="#">Articles </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
    `;
    $("header").append(header);
}