function footer() {
    var footer = `
        <div class="container pb-4">
            <div class="row pt-5">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <h5 class="font-weight-bold mb-4">
                        <i class="text__base__color fa fa-user-circle" aria-hidden="true"></i> &nbsp; About Us</h5>
                    <div class="heading__divider"></div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni harum voluptates!</p>
                    <div class="d-flex flex-column">
                        <div class="p-2">
                            <h6>
                                <i class="fa fa-location-arrow text__base__color" aria-hidden="true"></i> &nbsp; #1234, 2nd Floor Lorem Ipsum US 123456
                            </h6>
                        </div>
                        <div class="p-2">
                            <h6>
                                <i class="fa fa-phone-square text__base__color" aria-hidden="true"></i> &nbsp; +(91) 9876543210
                            </h6>
                        </div>
                    </div>
                    <div class="d-flex flex-row bd-highlight mb-3 footer__social__icons">
                        <div class="p-2 bd-highlight">
                            <i class="text__base__color fa fa-facebook-official" aria-hidden="true"></i>
                        </div>
                        <div class="p-2 bd-highlight">
                            <i class="text__base__color fa fa-linkedin-square" aria-hidden="true"></i>
                        </div>
                        <div class="p-2 bd-highlight">
                            <i class="text__base__color fa fa-youtube-square" aria-hidden="true"></i>
                        </div>
                        <div class="p-2 bd-highlight">
                            <i class="text__base__color fa fa-twitter-square" aria-hidden="true"></i>
                        </div>
                        <div class="p-2 bd-highlight">
                            <i class="text__base__color fa fa-instagram" aria-hidden="true"></i>
                        </div>
                        <div class="p-2 bd-highlight">
                            <i class="text__base__color fa fa-quora" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">

                    <h5 class="font-weight-bold mb-4"> <i class="text__base__color fa fa-newspaper-o" aria-hidden="true"></i> &nbsp; Latest Posts
                    </h5>
                    <div class="heading__divider"></div>
                    <div class="row">
                        <div class="col-4">
                            <img src="./assets/images/stadium.jpg" class="card-img-top footer__post__img" alt="">
                        </div>
                        <div class="col-8">
                            <p class="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit..</p>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-4">
                            <img src="./assets/images/stadium.jpg" class="card-img-top footer__post__img" alt="">
                        </div>
                        <div class="col-8">
                            <p class="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit..</p>
                        </div>
                    </div>
                    <div class="row mt-3 mb-2">
                        <div class="col-4">
                            <img src="./assets/images/stadium.jpg" class="card-img-top footer__post__img" alt="">
                        </div>
                        <div class="col-8">
                            <p class="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit..</p>
                        </div>
                    </div>

                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">

                    <h5 class="font-weight-bold mb-4"><i class="text__base__color fa fa-picture-o" aria-hidden="true"></i> &nbsp; Gallery</h5>
                    <div class="heading__divider"></div>

                    <div class="row">
                        <div class="col-4">
                            <img src="./assets/images/stadium.jpg" class="card-img-top" alt="">
                        </div>
                        <div class="col-4">
                            <img src="./assets/images/stadium.jpg" class="card-img-top" alt="">
                        </div>
                        <div class="col-4">
                            <img src="./assets/images/stadium.jpg" class="card-img-top" alt="">
                        </div>
                        <div class="col-4 mt-3">
                            <img src="./assets/images/stadium.jpg" class="card-img-top" alt="">
                        </div>
                        <div class="col-4 mt-3">
                            <img src="./assets/images/stadium.jpg" class="card-img-top" alt="">
                        </div>
                        <div class="col-4 mt-3">
                            <img src="./assets/images/stadium.jpg" class="card-img-top" alt="">
                        </div>
                        <div class="col-4 mt-3">
                            <img src="./assets/images/stadium.jpg" class="card-img-top" alt="">
                        </div>
                        <div class="col-4 mt-3">
                            <img src="./assets/images/stadium.jpg" class="card-img-top" alt="">
                        </div>
                        <div class="col-4 mt-3">
                            <img src="./assets/images/stadium.jpg" class="card-img-top" alt="">
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="d-flex justify-content-center align-items-center">
                <p class=" mb-0"><i class="fa fa-copyright" aria-hidden="true"></i> Copyrighted by <b class="text__white__color">The Cricket
                        Digest</b></p>
            </div>
        </div>
    `;
    $("footer").append(footer);
}