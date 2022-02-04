<template>
<div class="cart">
    <div class="container">
        <h1 class="text-center">My Cart</h1>
        <div class="row rounded-3">
            <div class="col">
                <img src="@/assets/image/products/6.jpg" width="50%" class="rounded-3">
            </div>
            <div class="col">
                <select class="form-select" aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2" selected>2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            <div class="col">
                <h5 >bouqe</h5>
                <h6>30$</h6>
            </div>
            <div class="col">
                <button class="btn btn-danger">Delete</button>
            </div>
        </div>
        <!-- <div class="row rounded-3">
            <div class="col">
                <img src="@/assets/image/products/11.jpg" width="50%" class="rounded-3" height="120px">
            </div>
            <div class="col">
                <select class="form-select" aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4" selected>4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            <div class="col">
                <h5 >box</h5>
                <h6 >120$</h6>
            </div>
            <div class="col">
                <button class="btn btn-danger">Delete</button>
            </div>
        </div>
        <div class="row rounded-3">
            <div class="col">
                <img src="@/assets/image/products/4.jpg" width="50%" class="rounded-3" height="120px">
            </div>
            <div class="col">
                <select class="form-select" aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2" selected>2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            <div class="col">
                <h5>bouqe</h5>
                <h6>10$</h6>
            </div>
            <div class="col">
                <button class="btn btn-danger">Delete</button>
            </div>
        </div>
        <div class="row rounded-3">
            <div class="col">
                <img src="@/assets/image/products/22.jpg" width="50%" class="rounded-3" height="120px">
            </div>
            <div class="col">
                <select class="form-select" aria-label="Default select example">
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            <div class="col">
                <h5>bouqe</h5>
                <h6>60$</h6>
            </div>
            <div class="col">
                <button class="btn btn-danger">Delete</button>
            </div>
        </div> -->
        <div class="total col">
            <h5 style="font-weight:bold">Total : <span>260$</span></h5>
        </div>
        <div class="check" style="margin-bottom:50px">
            <button class="btn btn-success">Order Now</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Cart",
}
</script>

<style lang="scss" scoped>
@import"../scss/style.scss";

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .row {
        width: 95% !important;
        margin: 20px auto !important;

        img {
            width: 50px;
            height: 50px;
        }
    }
}

.cart {
    margin-top: 100px;

    .container {
        h1 {
            color: $primary-color;
            margin-bottom: 30px;
        }

        .row {
            box-shadow: 0px 0px 10px 2px rgba(128, 128, 128, 0.712);
            padding: 20px 0px 10px 0px;
            display: flex;
            align-items: center;
            margin-top: 40px;

            .col {
                h5 {
                    margin-bottom: 10px;
                    font-weight: bold;
                }

                h6 {
                    font-weight: bold;
                    color: $primary-color;
                }
                .btn-danger{
                    padding: 5px 7px !important;
                }
            }
        }

        .check,
        .total {
            margin-top: 30px;
            text-align: left;
        }

    }
}
</style>
