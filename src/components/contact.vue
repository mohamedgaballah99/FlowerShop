<template>
<div class="contact">
    <div class="container">
        <div class="info">
            <h1>Contact</h1>
        </div>
        <form>
            <div class="d-flex">
                <div class="mb-3">
                    <label  class="form-label">Full Name : </label>
                    <input type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Email address : </label>
                    <input type="email" class="form-control">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
            </div>
            <div class="mb-3">
                <label  class="form-label">Product Name : </label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Message : </label>
                <textarea class="form-control"  rows="6"></textarea>
            </div>
            <button type="submit" class="btn btn-blue">Submit</button>
        </form>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import"../scss/style.scss";
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .d-flex{
        display: block !important;
        width: 100%;
                >div.mb-3{
                    display: block;
                    width: 100% !important;
                   
                }
            }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .d-flex{
        // display: block !important;
        // width: 100%;
                >div.mb-3{
                    // display: block;
                    width: 47% !important;
                   
                }
            }
}
.contact {
    margin-top: 90px;
    margin-bottom: 20px;
    .container {
        .info {
            h1 {
                color: $primary-color;
                font-style: italic;
                margin-bottom: 20px;
            }
        }
        form{
            width: 70%;
            margin: auto;
            text-align: left;
            .d-flex{
                justify-content: space-between;
            }
        }
    }
}
</style>
