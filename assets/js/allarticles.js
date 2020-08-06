function allArticles() {
    var allArticles = `
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="d-flex bd-highlight mb-3">
                                        <div class="mr-auto p-2 bd-highlight">
                                            <h4 class="text__white__color mb-4">All Articles</h4>
                                        </div>
                                        <div class="p-2 bd-highlight">
                                            <div class="input-group">
                                                <input class="form-control" type="text" name="" placeholder="Search Article" aria-label="Recipient's " aria-describedby="my-addon">
                                                <div class="input-group-append">
                                                    <span class="input-group-text search__article__icon"
                                                    id="my-addon">
                                                        <i class="fa fa-search" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

    for (let i = 0; i < 12; i++) {
        allArticles += `
                             <div class="col-lg-6 col-md-6 col-sm-12 mb-3">
                                <a href="./article.html" class="all__articles">
                                    <div class="card text-left ">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <img src="./assets/images/stadium.jpg" class="card-img-top" alt="">
                                                </div>
                                                <div class="col-lg-8 pr-1">
                                                    <h6 class="text__base__color font-weight-bold">New Article / <span class="text__white__color">Monday 26,2020</span></h6>
                                                    <p class="mb-0">
Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam recusandae nihil voluptatibus dolor error laudantium saepe velit voluptate labore, alias similique perspiciatis debitis possimus!..
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            `;


    }
    allArticles += `</div>`;

    $("#allArticles").append(allArticles);
}