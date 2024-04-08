<template>
<header>
  <button v-if="mssg" @click="goBack">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M228,200a4,4,0,0,1-8,0,92.1,92.1,0,0,0-92-92H41.66l41.17,41.17a4,4,0,0,1-5.66,5.66l-48-48a4,4,0,0,1,0-5.66l48-48a4,4,0,0,1,5.66,5.66L41.66,100H128A100.11,100.11,0,0,1,228,200Z"></path></svg>
  </button>
  <h1>{{ mssg || "all colors"}}</h1>
</header>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
 
  props: ['mssg'],
  setup(){
  
    const router = useRouter();

    const goBack = () => {
      router.go(-1)
    }

    return {
      goBack
    }
  }
}
</script>

<style scoped>

header {  

  position: fixed;
  top: 0;
  width: min(100%,1300px);
  background: var(--color-background);
  z-index: 5;
  display: flex;
  justify-content: left;
  align-content: center;
  padding-left: 4em;
  gap: 0.4em;
}

header h1 {

  font-size: 1.1em;
  text-transform: capitalize;
  font-weight: 500;
}
header button {

  background: transparent;
 
  border: 1px solid transparent;
  border-right: 1px solid rgba(183,185,190,0.5);
  outline: none;
}

header button svg {

  fill: #FFFFFF;
  width: 2em;
  height: 2em;
}

</style>