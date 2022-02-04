<template>
  <div class="footer">
      <div class="container">
          <div class="row">
              <div class="col">
                  <p>All &reg; Copy Right  Reserved To TechPay</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"Copyright"
}
</script>

<style lang="scss" scoped>
@import"../scss/style.scss";
    .footer{
        background-color: $primary-color;
        .container{
            color: white;
            .row{
                .col{
                    padding: 20px 0px;
                    font-weight: bold;
                }
            }
        }
    }
</style>