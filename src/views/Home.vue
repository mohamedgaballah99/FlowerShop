<template>
  <div class="home">
    <home></home>
    <products></products>
    <sales></sales>
    <about></about>
    <contact></contact>
    <Copyright></Copyright>
  </div>
</template>

<script>
import home from '@/components/home';
import products from '@/components/products';
import sales from '@/components/sales';
import about from '@/components/about';
import contact from '@/components/contact';
import Copyright from '@/components/Copyright';

export default {
  name: "Home",
  components: { 
    home,
    products,
    sales,
    about,
    contact,
    Copyright
  },
};
</script>
