function popular() {
    var popular = `
                <div class="row">
                    <div class="col-12">
                        <h4 class="mt-4">Popular Articles</h4>
                    </div>
                    <div class="col-12 lazy slider">
                `;

    for (let index = 0; index < 8; index++) {
        popular += `
                        <div>
                            <a href = "./article.html"
                            class = "article__card" >
                                <div class="card ">
                                    <img class="card-img-top" src="./assets/images/stadium.jpg" alt="Card image cap">
                                    <div class="card-body">
                                        <p class="text-info font-weight-bold">New Article / <span class="text__black__color font-weight-bold">March 26, 2020</span></p>
                                        <h5 class="card-title">Ahead of IPL Governing Council meeting, questions on Covid-19 testing and bio-bubbles</h5>
                                        <p class="card-text">The dates and venue for IPL 2020 are out - in the UAE from September 19-November 8 (or 10)...</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `;
    }

    popular += `
                    </div>
                </div>`;

    $("#popular").append(popular);

    $('.slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
}