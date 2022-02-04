<template>
  <div class="products">
      <allProducts></allProducts>
    <sales></sales>
    <about></about>
    <contact></contact>
    <Copyright></Copyright>
  </div>
</template>

<script>
import allProducts from '@/components/allProducts';
import sales from '@/components/sales';
import about from '@/components/about';
import contact from '@/components/contact';
import Copyright from '@/components/Copyright';
export default {
    name:"Products",
    components:{
      allProducts,
    sales,
    about,
    contact,
    Copyright
    }
}
</script>

<style lang="scss" scoped>
.products{
  margin-top: 150px;
}
</style>