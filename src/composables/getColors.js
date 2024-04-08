import { ref } from 'vue';

const getColors = () => {
    const colors = ref([]);
    const error = ref('');
    
    const load = async (color) => {
        try {
            if (color) {
                const Groupsdata = await fetch(`https://color-serve.onrender.com/api/groups/${color}`);
                const Groupsresults = await Groupsdata.json();
        
                colors.value = Groupsresults.data || [];
            } else {
                const data = await fetch('https://color-serve.onrender.com/api/colors/');
                const results = await data.json();
        
                colors.value = results.data || [];
            }
        } catch (error) {
            error.value = error.message;
            console.log(error);
        }
    };

    return { colors, error, load };
};

export default getColors;
