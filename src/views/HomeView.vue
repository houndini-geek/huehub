<template>

<Cards :colors="colors" :error="error"/>

</template>


<script>

import getColors from '../composables/getColors';

import Cards from '../components/Cards.vue'

export default {
  components: { Cards },
    setup() {
        const { colors, error, load } = getColors();
        load(); 
        return {
          colors,
          error
        };
    }
}
</script>


<style>

</style>