import { ref } from 'vue';

const getColors = () => {
    const colors = ref([]);
    const error = ref('');

  const load = async () => {

    try {
        const data = await fetch('https://color-serve.onrender.com/api/themes/light');
        const results = await data.json();

        colors.value = results.data || colors
        console.log(results.data)
    } catch (error) {
        error.value = error.message
        console.log(error)
    }

}
return { colors, error ,load  }


    }

export default getColors