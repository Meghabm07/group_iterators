function header() {
    var header = `
                <div class="container-fluid">
                    <nav class = "navbar bottom__navbar navbar-expand-lg" >
                        <a class="navbar-brand" href="index.html">
                            <img src="./assets/images/logo.png" alt="logo" />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bottomNavBar" aria-controls="bottomNavBar" aria-expanded="false" aria-label="Toggle navigation">
                           <i class="fa fa-bars text__white__color" aria-hidden="true"></i>
                        </button>

                        <div class="collapse navbar-collapse" id="bottomNavBar">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html">Home </a>
                                </li>
                                 <li class="nav-item">
                                    <a class="nav-link" href="article.html">Articles </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
    `;
    $("header").append(header);

    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    var today = new Date();

    $('#today').text(today.toLocaleDateString("en-US", options));
}