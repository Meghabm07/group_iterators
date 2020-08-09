function popular() {
    var popular = `
                <div class="row">
                    <div class="col-12 lazy slider">
                `;

    for (let index = 0; index < 8; index++) {
        popular += `
                        <div>
                            <a href = "./article.html"
                            class="" >
                                <div class="card">
                                    <div class="card-body text-center">
                                        <iframe src="https://www.youtube.com/embed/JdEkYvPmNWQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <p class="card-text">
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae
                                        ...</p>
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