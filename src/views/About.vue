<template>
  <div class="products">
         <about></about>
    <contact></contact>
    <Copyright></Copyright>
  </div>
</template>

<script>
import about from '@/components/about';
import contact from '@/components/contact';
import Copyright from '@/components/Copyright';
export default {
    name:"About",
    components:{
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

