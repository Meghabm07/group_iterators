function singleArticle() {
    var singleArticle = '';

    singleArticle += `
                        <div class="row">
                            <div class="col-lg-8 col-md-12 col-sm-12 single__article__content">
                                <div class="d-flex flex-row-reverse bd-highlight">
                                    <div class="p-2 bd-highlight">
                                        <p>Posted on : Monday 05 2020</p>
                                    </div>
                                </div>
                                <h3 class="single__article__title">
                                    Japan’s virus success has puzzled the world. Is its luck running out?
                                </h3>
                                <p>The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>

                                <img src="http://quomodosoft.com/html/newsprk/assets/img/blog/single_post1.jpg" alt="">

                                <br>

                                <br>

                                <p>Entilators will be taken from certain New York hospitals and redistributed to the worst-hit parts of the state under an order to be signed by Governor Andrew Cuomo.</p>

                                <p>New York saw its highest single-day increase in deaths, up by 562 to 2,935 - nearly half of all virus-related US deaths recorded yesterday. The White House may advise those in virus hotspots to wear face coverings in public to help
                                    stem the spread.\</p>

                                <p>The US now has 245,658 Covid-19 cases.</p>

                                <p>A shortage of several hundred ventilators in New York City, the epicentre of the outbreak in the US, prompted Mr Cuomo to say that he will order the machines be taken from various parts of the state and give them to harder-hit areas.</p>

                                <p>Amid a deepening crisis, top health official Dr Anthony Fauci has said he believes all states should issue stay-at-home orders.</p>

                                <p>“I don’t understand why that’s not happening,” Dr Fauci told CNN on Thursday. “If you look at what’s going on in this country, I just don’t understand why we’re not do ingthat.”</p>

                                <p>“You’ve got to put your foot on the accelerator to bring that number down,” he added, referring to infection and death rates.</p>
                            
                                <iframe style = "width: 100%;height: 420px;" src="https://www.youtube.com/embed/8kOhXLKCyCM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            
                            <div class="col-lg-4 col-md-12 col-sm-12">

                                <div id="relatedArticle"></div>

                            </div>
                        </div>
                    `;

    $("#singleArticle").append(singleArticle);

    getRelatedArticle();

}

function getRelatedArticle() {
    var relatedArticle = `
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <h4 class="text__white__color mb-4">Related Articles</h4>
                                </div>
                            `;

    for (let i = 0; i < 9; i++) {
        relatedArticle += `
                             <div class="col-lg-12 col-md-6 col-sm-12 mb-3">
                                <a href="./article.html" class="related__article">
                                    <div class="card text-left ">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <img src="./assets/images/stadium.jpg" class="card-img-top" alt="">
                                                </div>
                                                <div class="col-lg-8 pr-1">
                                                    <h6 class="text__base__color font-weight-bold">New Article / <span class="text__white__color">Monday 26,2020</span></h6>
                                                    <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit... </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            `;


    }
    relatedArticle += `</div>`;

    $("#relatedArticle").append(relatedArticle);
}