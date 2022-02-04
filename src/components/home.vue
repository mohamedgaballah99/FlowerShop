<template>
<div class="home">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-6" data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="100">
                <div class="img">
                    <img src="@/assets/image/home/logoo.png" alt="svg">
                </div>
                <div class="info">
                    <h2>Is Your Best Choise For What You Want</h2>
                    <p>Flowers Shop is an online store that contains all your needs of Flowers, Bouqs, and Boxes, with excellent quality and reasonable price.</p>
                    <a href="#products" class="link btn btn-blue">Explore</a>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 slider" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">
                <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/image/home/slider.jpg" class="d-block w-100 rounded-3" height="450" alt="image2">
                        </div>
                        <!-- <div class="carousel-item">
                            <img src="@/assets/image/home/2.jpg" class="d-block w-100 rounded-3" alt="image4" height="600">
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "home",
}
</script>

<style lang="scss" scoped>
@import "../scss/style.scss";

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .home {
        .container {
            margin-top: 80px !important;  
            line-height: 2 !important;
            .slider{
                margin-top: 40px !important;
            }
            .row {
                >div {
                    width: 95%;
                    margin: auto;
                }

                .img {
                    width: 70% !important;
                }

                h2 {
                    font-weight: bold;
                    margin-bottom: 20px;
                
                }
                p{
                    margin-bottom: 25px;
                }
                .info {
                    a {
                        text-align: center;
                        margin: 15px auto !important;
                        margin-right: auto !important;
                        // width: 100px;
                        display: inline !important;
                    }
                }
            }

        }
    }
}


.home {
    .container {
        margin-top: 180px;

        .img {
            margin-top: 80px;
            width: 80%;

            img {
                width: 100%;
            }
        }

        .info {
            margin-top: 20px;
            text-align: left;
            width: 100%;

            p {
                font-size: 18px;
                margin: 20px 0px;
                width: 100%;
font-weight: bold;            }
            h2{
                font-weight: bold;
            }

            a {
               padding: 5px 17px;
            }
        }
    
    }
}
</style>
