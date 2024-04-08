<template>
    <!--  -->
<div class="cards">

<div class="card" v-for="color in colors" :key="color">
    
      <RouterLink :to="{ name: 'groups', params:{ groups: color.group }}" class="preview-card" :style="{backgroundColor: '#' + color.hex }"></RouterLink>
  
        <div class="right-side">
          <h4>{{color.name}}</h4>
          <span>#{{color.hex}}</span>
          <button title="Copy HEX" type="button" @click="copyHex(color.hex)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path
                d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      
</div>



</template>


<script>

export default {

  props: ['colors', 'error'],

  setup(){

      const copyHex = (hex) => {

        try {
          navigator.clipboard.writeText(hex);
          alert(`${hex}: copied to clipboard`)
        } catch (error) {
          alert(error)
        }
      }
    return {
      copyHex

    }
  }
}

</script>



<style scoped>


.cards {
    grid-column: 1 / 13;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(10rem,1fr));
    place-content: center;
    gap: .7em;
    transition: transform 0.2s ease-in;
    padding: 0.7em;
    padding-bottom: 7em;
}
.cards .card {
    height: 4rem;
    display: flex;
    justify-content:left;
    align-items: center;
    border-radius: .4em;
    overflow: hidden;
    padding: .2em;
    background-color: rgba(31, 31, 31,.5);
    border: 1px groove rgba(0, 0, 0, 0.4);
    transition:.2s ease-in-out
}



.cards .card .preview-card {

    border: 1px solid rgba(100, 100, 100, 0.4);
    height: 100%;
    width: 40%;
    border-radius: 83% 17% 89% 11% / 11% 91% 9% 89% ;
   cursor: pointer;
   transition: transform .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}


.cards .card .preview-card:hover {

    transform: scale(1.1);
    transition: transform .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.cards .card .right-side {
position: relative;
text-align: left;
width: 60%;
height: 100%;
display: flex;
justify-content:space-between;
align-items: flex-start;
flex-direction: column;

padding: .3em;
}

.cards .card .right-side h4{

    text-transform: capitalize;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: .9em;
    font-weight: 600;
    color: #e7e6e6;
}

.cards .card .right-side span{

    text-transform: capitalize;
    font-size: 0.8em;
    font-weight: 600;
    width: 100%;
    display: inline-block;
    color: #e7e6e6;
}

.cards .card .right-side button{
position: absolute;
right: 0;
bottom: 0;
background-color: transparent;
border: none;
z-index: 1;
}

.cards .card .right-side button svg{

    fill: #e7e6e6;
}

</style>