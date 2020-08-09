function popular() {
    var popular = `
                <div class="row">
                    <div class="col-12">
                        <h4 class="text__black__color mt-4">Popular Articles</h4>
                    </div>
                    <div class="col-12 lazy slider">
                `;

    for (let index = 0; index < 8; index++) {
        popular += `
                        <div>
                            <a href = "./article.html"
                            class="" >
                                <div class="card">
                                    <img class="card-img-top" src="./assets/images/stadium.jpg" alt="Card image cap">
                                    <div class="card-body">
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
}