<template>
  <h5 class="goups_count">Groups {{ groups }} {{ colors.length }} color(s)</h5>
 <Cards :colors="colors" :error="error"/>

</template>

<script>

import getColors from '../composables/getColors';
import Cards from '../components/Cards.vue';

export default {
components: { Cards},
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

.goups_count {

  position:fixed;
  top: 0;
  width: min(100%,1300px);
  text-transform: capitalize;
  font-size: 1.2em;
  padding: 0.5em;
  text-align: left;
  background-color: #262626;
  z-index: 5;
}

</style>