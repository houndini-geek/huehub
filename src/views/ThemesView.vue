<template>
 <Header :mssg="themes + ' ' + 'themes'"/>
 <Cards :colors="colors" :error="error"/>
</template>

<script>

import Header from '../components/Header.vue';
import getColors from '../composables/getColors';
import Cards from '../components/Cards.vue';

export default {
  props: ['themes'],
  components: { Header, Cards },
  setup(themes) {
    const { colors, error, load } = getColors();
        load(themes.themes); 
    return {
        colors,
          error
    }
  }

}
</script>

<style>

</style>