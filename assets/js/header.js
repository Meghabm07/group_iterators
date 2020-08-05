function header() {

    var currentUrlLastSegment = document.URL.substring(document.URL.lastIndexOf('/') + 1);
    var allArticleNavActive = '';
    var homeNavActive = '';
    var homePageMostViewed = '';

    switch (currentUrlLastSegment) {
        case constants().ALL_ARTICLES_PAGE_NAME:

            allArticleNavActive = 'active';

            break;

        case '':
            homeNavActive = 'active';

            homePageMostViewed = `
                                    <li class="nav-item">
                                        <a class="nav-link" href="#mostView">Most Viewed Articles </a>
                                    </li>
                                    `;

            break;

        case constants().HOME_PAGE_NAME:

            homeNavActive = 'active';

            homePageMostViewed = `
                                    <li class="nav-item">
                                        <a class="nav-link" href="#mostView">Most Viewed Articles </a>
                                    </li>
                                    `;
            break;
    }


    var header = `
                <div class="container-fluid nav__container">
                    <nav class = "navbar top__navbar navbar-expand-lg" >
                        <a class="navbar-brand" href="index.html">
                            <img src="./assets/images/logo.png" alt="logo" />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#topNavBar" aria-controls="topNavBar" aria-expanded="false" aria-label="Toggle navigation">
                           <i class="fa fa-bars text__white__color" aria-hidden="true"></i>
                        </button>

                        <div class="collapse navbar-collapse" id="topNavBar">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class = "nav-link ${homeNavActive}"
                                    href = "index.html" > Home </a>
                                </li>
                                 <li class="nav-item">
                                    <a class="nav-link ${allArticleNavActive}" href="all-articles.html">Articles </a>
                                </li>
                                ${homePageMostViewed}
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