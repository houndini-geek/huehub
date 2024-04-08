<template>
  <Header :mssg='groups + " " + "groups"'/>
 <Cards :colors="colors" :error="error"/>
</template>

<script>

import getColors from '../composables/getColors';
import Cards from '../components/Cards.vue';
import Header from '../components/Header.vue';
export default {
components: { Cards, Header},
props: ['groups'],
 setup(groups) {
        const { colors, error, load } = getColors();
        load(groups.groups); 
        return {
          colors,
          error
        };
    }

}
</script>


<style scoped>

</style>