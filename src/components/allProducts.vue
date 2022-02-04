<template>
<div class="pro">
    <div class="container">

        <div class="row">
            <div class="header col-sm-12 col-md-6 mx-auto">
                <h1>Products</h1>
            </div>
            <div class="col-sm-12 col-md-6 options">
                <input type="search" class="form-control" placeholder="Search for Flowers , Bouqs , and Boxes...!" v-model="search">
            </div>
        </div>
        <div class="row rounded-3"  data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">

            <div class="col-sm-12 col-md-4 col-lg-3 parent  rounded-3" v-for="item in filter()" :key="item.id">
                <div class="overlay rounded-3">
                   
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                        </svg></span>

                </div>

                <!-- api -->
                <div class="img" >
                    <img :src="require(`@/assets/image/products/${item.img}`)" alt="photo" class="rounded-3">
                </div>
                <div class="info">
                    <h2>{{item.name}}</h2>
                    <h3 class="rotate">{{item.price}}</h3>
                </div>
            </div>
           
        </div>
    </div>
</div>
</template>

<script>
import apiUrl from "../json/allproducts.json"
export default {
    data() {
        return {
             resultUrl:apiUrl,
             search:''
        }
    },
    methods: {
        filter(){
            return this.resultUrl.filter(product =>{
                return product.name.match(this.search.toLowerCase())
            })
            
        },
    },
}
</script>

<style lang="scss" scoped>
@import"../scss/style.scss";

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px)   {

    input[type="search"] {
        margin-top: 15px !important;
    }

    .row {
        .parent {
            margin: 20px auto !important;
            width: 80% !important;
        }
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .row {
        .parent {
            margin: 20px auto !important;
            width: 30% !important;
        }
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .row {
        .parent {
            // margin:10 !important;
            width: 22% !important;
        }
    }
}

.pro {
    margin-top: 80px;

    .container {

        .row:first-of-type {
            margin-bottom: 50px;

            .header {
                h1 {
                    text-align: left;
                    color: $primary-color;
                }
            }

            .options {
                margin-top: 10px;
                input::placeholder{
                    color: $primary-color !important;
                   
                }

            }
        }

        .row:last-of-type,
        .row:nth-of-type(2),
        .row:nth-of-type(3) {
            margin: 30px;

            .parent {
                box-shadow: 0px 0px 10px 2px rgba(128, 128, 128, 0.712);
                padding: 0px 0px 10px 0px;
                position: relative;
                cursor: pointer;
               transition: 0.5s ease-in-out;
               
 &:hover {
                 box-shadow: 0px 0px 10px 2px #a50a0a7a !important;
                transform: scale(1.05);
            }
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
            
                    button {
                        display: block !important;
                    }

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
                &:hover .rotate {
                 transform: rotate(360deg);
            }
            }

            .parent:hover .overlay {
                opacity: 1;
            }

            .img {
                width: 100%;

                img {
                    width: 100%;
                    height: 200px;
                }
            }

            .info {
                padding: 0px 5px;

                h2 {
                    margin: 5px 0px;
                    font-size: 18px !important;
                    font-weight: bold;
                    color: white;
                    background:$primary-color ;
                    border-radius: 5px;
                    padding: 5px 0px;
                }

                h3 {
                    background: $second-color;
                    color: white;
                    padding: 8px 0px;
                    border-radius: 5px;
                    font-size: 15px !important;
                    font-weight: 600;
                }

            }
        }
    }
}
</style>
