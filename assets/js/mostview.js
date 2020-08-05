function mostView() {
    var mostView = `
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <h4 class="mb-4 text__white__color">Most View</h4>
                    </div>
                `;

    for (let index = 0; index < 6; index++) {
        mostView += `
                        <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                            <a href="./article.html" class="most__view__article">
                                <div class="card text-left ">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class = "col-lg-4 col-md-6 col-sm-12 pr-0 most__view__article__img" >
                                                <img src="./assets/images/stadium.jpg" class="card-img-top" alt="">
                                            </div>
                                            <div class = "col-lg-8  col-md-6 col-sm-12 pr-1 pt-2" >
                                                <h6 class="text__base__color font-weight-bold">New Article / <span class="text__white__color">Monday 26,2020</span></h6>
                                                <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime... </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `;
    }

    mostView += `</div>`;

    $("#mostView").append(mostView);
}