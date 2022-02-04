<template>
<div class="sales">
    <div class="container">
        <div class="info">
            <h1>Sales</h1>
            <p>At Techpay we have big sales for you take alook <br>we have a big offers for you! </p>
        </div>
        <div class="row rounded-3">
            <div class="col-sm-12 col-md-6 mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">

                <div class="img img-bottom">
                    <div class="overlay">
                        
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                            </svg></span>
                        
                    </div>
                    <span><i class="fas fa-percent"></i></span>
                    <img src="@/assets/image/products/35.jpg" alt="salesimg" class="rounded-3 imgheight">
                    <h4 class="ocaz rounded-3"><h4 class="dis">100$ </h4> <h3>70$</h3></h4>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 mx-auto" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
                <div class="img">
                    <div class="overlay">
                        
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                            </svg></span>
                    </div>
                    <span><i class="fas fa-percent"></i></span>
                    <img src="@/assets/image/products/29.jpg" alt="salesimg" class="rounded-3">
                     <h4 class="ocaz rounded-3"><h4 class="dis">100$ </h4> <h3>70$</h3></h4>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .sales {
        margin-top: 80px !important;

        .container {
            width: 85% !important;

            .row {
                .img-bottom {
                    margin-bottom: 30px !important;

                    .imgheight {
                        height: 180px !important;
                    }
                }
            }

            .img {
                span {
                    i {
                        font-size: 25px !important;
                    }
                }
            }
        }
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .sales {
        margin-top: 60px !important;

        .container {
            .row {
                .img-bottom {
                    .imgheight {
                        height: 165px !important;
                    }
                }
            }
        }
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .sales {
        .container {
            .row {
                .img-bottom {
                    .imgheight {
                        height: 227px !important;
                    }
                }
            }
        }
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .sales {
        .container {
            .row {
                .img-bottom {
                    .imgheight {
                        height: 270px !important;
                    }
                }
            }
        }
    }
}

.sales {
    margin-top: 100px;

    .container {
        .info {
            margin-bottom: 60px;

            h1 {
                color: $primary-color;
                font-style: italic;
                margin-bottom: 20px;
            }

            p {
                font-weight: bold;
                font-size: 20px;
                text-transform: capitalize;
            }
        }

        .row {
            box-shadow: 0px 0px 10px 2px #0022fe6e;
            padding: 50px 0px;

            >div {
                cursor: pointer;

                .img {
                    position: relative;
                    width: 50%;
                    margin: auto;

                    .overlay {
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        right: 0px;
                        bottom: 0px;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 0, 0, 0.39);
                        display: flex;
                        justify-content: space-around;
                        transition: 0.5s ease-in-out !important;
                        align-items: center;
                        opacity: 0;

                        span {
                            svg {
                                color: $primary-color;
                                // color: white;
                                text-shadow: 0px 0px 10px 2px #0022fe7a;
                                transition: 0.5s ease-in-out;
                                cursor: pointer;
                                animation: up 2s infinite;

                                &:hover {
                                    color: white !important;
                                    // color: $primary-color;
                                }
                            }
                        }

                        

                    }

                    span {
                        i {
                            color: $primary-color;
                            // color: white;
                            position: absolute;
                            top: 5px;
                            left: 5px;
                            font-size: 32px;
                            transition: 0.5s ease-in-out;
                            cursor: pointer;
                            animation: up 2s infinite;

                            &:hover {
                                color: white !important;
                                // color: $primary-color;
                            }
                        }
                    }

                    img {
                        width: 100%;
                    }

                    &:hover .overlay {
                        opacity: 1;
                    }
                    &:hover .ocaz {
                       transform: rotate(360deg);
                    }
                }
                .ocaz {
                            font-weight: bold;
                            background: $primary-color;
                            color: white !important;
                            display: flex;
                            justify-content: space-around;
                            padding: 8px 0px;
                            transition: 0.5s ease-in-out;
                            .dis {
                                text-decoration: line-through;
                            }
                        }
            }
        }
    }
}
</style>
