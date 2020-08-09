function mostView() {
    var mostView = `
                <div class="row">
                   
                `;

    for (let index = 0; index < 3; index++) {
        mostView += `
                        <div class="col-lg-12 col-md-12 col-sm-12 mb-3">
                            <a href="./article.html" class="most__view__article">
                                <div class="row pt-3 pb-3">
                                    <div class = "col-lg-4 col-md-6 col-sm-12 pr-0 most__view__article__img" >
                                        <img src="./assets/images/stadium.jpg" class="card-img-top" alt="">
                                    </div>
                                    <div class = "col-lg-8  col-md-6 col-sm-12 pr-1 pt-2" >
                                        <h6 class="text__base__color font-weight-bold">New Article / <span class="text__black__color">Monday 26,2020</span></h6>
                                        <p class="mb-0">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Qui quaerat illo repellendus id beatae tempora ad, minima, culpa facere cupiditate voluptates eius debitis distinctio sed rerum maiores suscipit quas temporibus.
                                        ... </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `;
    }

    mostView += `</div>`;

    $("#mostView").append(mostView);
}