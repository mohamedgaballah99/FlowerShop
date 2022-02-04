<template>
  <div class="products">
      <sales></sales>
    <about></about>
    <contact></contact>
    <Copyright></Copyright>
  </div>
</template>

<script>
import sales from '@/components/sales';
import about from '@/components/about';
import contact from '@/components/contact';
import Copyright from '@/components/Copyright';
export default {
    name:"Sales",
    components:{
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