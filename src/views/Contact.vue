<template>
  <div class="products">
    <contact></contact>
    <Copyright></Copyright>
  </div>
</template>

<script>
import contact from '@/components/contact';
import Copyright from '@/components/Copyright';
export default {
    name:"Contact",
    components:{
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