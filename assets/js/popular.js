function popular() {
    var popular = `
                <div class="row">
                    <div class="col-12">
                        <h4 class="text__white__color mt-4">Popular Articles</h4>
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
                                        <p class="text__base__color font-weight-bold">New Article / <span class="text__white__color font-weight-bold">March 26, 2020</span></p>
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
}