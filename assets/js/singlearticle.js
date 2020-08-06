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
                                    Rohit Sharma wary of coming back from 'longest gap in my career without holding a bat'
                                </h3>
                                
                                    <img src = "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1228557_1296x729.jpg&amp;w=920&amp;h=518&amp;scale=crop&amp;cquality=80&amp;location=origin&amp;format=jpg" /> 
                                   
                                    </br>
                                    </br>
                                    </br>

                                    <p><a href="http://www.espncricinfo.com/india/content/player/34102.html">Rohit Sharma</a>&nbsp;has not played any cricket since he&nbsp;<a href="https://www.espncricinfo.com/story/_/id/28625905/injury-rules-rohit-sharma-remainder-new-zealand-tour">tore
                                            his left calf on February 2 during the T20 series in New Zealand</a>. Six months without cricket is "challenging" even for the world's No. 2 ODI batsman and Rohit admits that would be his primary concern as he gears up to lead
                                        defending IPL champions Mumbai Indians next month.</>
                                    <p>The injury forced Rohit to miss the ODI and Test legs of New Zealand tour and he was not part of the squad for the ODI series at home against South Africa as he recuperated form the injury. The postponement of IPL, from its regular window
                                        in the summer, due to the Covid-19 pandemic allowed Rohit to regain his fitness which he is now eager to test on field.</p>
                                    <p>"It''s the longest gap that I have ever had in my career without holding a bat," Rohit told PTI on Tuesday. "It will be a bit challenging. Unless I play, I will not know where I am and how I feel but body is completely fine. I feel physically
                                        more strong than ever because of the last four months."</p>
                                    <p style="text-align: left;"></p>
                                    <p>The 2020 IPL is scheduled to start on September 19 and although the tournament schedule is yet to come out, Mumbai will play Chennai Super Kings in the first match as per the norm. According to Rohit the slow nature of pitches in the UAE
                                        will play a dominant hand.</p>
                                    <p>"We have lot of time in our hands... I will be taking it slow," he said. "Luckily, I don''t think there is any rush that I need to show. We have enough time. I will work on getting back to the ground slowly because the temperature in Dubai
                                        is 40 degrees. It''s not easy.</p>
                                    <p>"Your planning changes a lot. Pitches in Dubai are a bit on the slower side. The pitches are not so different from India but yes overhead conditions will be a big factor as you are not always used to playing in 40 degrees, which can be
                                        a bit of a challenge. As much as we sit and plan things here, it could completely change once we are there and check out the conditions and then think about ideal combinations.&nbsp;</p>
                                    <p>Chennai Super Kings batsman&nbsp;<a href="http://www.espncricinfo.com/india/content/player/33335.html">Suresh
                                            Raina</a>&nbsp;said that while the conditions in the UAE - especially overhead - might be difficult, in a way the reduced travel of moving between only three venues that are not far apart would make things easier on the players
                                        in a way. "The best thing in Dubai is that you don't have logistical problems," Raina was quoted as saying, on a webinar, by PTI. "It is 45 minutes from Dubai to Abu Dhabi. You go from there [Dubai] to Sharjah, it's 40 mins.</p>
                                    <p>"In a way, we will have more rest and more time to plan our things and we know how to overcome the challenge."
                                    </p>
                                    <p>Rohit's success as a leader in the IPL has made pundits and even his peers to make comparisons with the best captains in the limited overs game. Recently Raina said&nbsp;<a href="https://www.espncricinfo.com/story/_/id/29556678/rohit-sharma-next-ms-dhoni-indian-team">he
                                            saw
                                            similarities in the leadership styles of Rohit and MS Dhoni</a>. Rohit responded politely saying&nbsp;
                                        <a href="https://www.espncricinfo.com/story/_/id/29592268/no-comparisons-dhoni-one-kind">such
                                            comparisons
                                            should not be made</a>.</p>
                                    <p>As far as leading in the a high-intensity tournament like IPL was concerned, Rohit said his main job is to communicate and give confidence to the younger players. "You need to give confidence to the younger players, some of them haven't
                                        played the IPL before, don't have international exposure," he said. "I need to make sure they are in the best zone, not pressurised by the moment and get those little performances from everyone.
                                    </p>

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