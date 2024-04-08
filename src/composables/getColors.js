import { ref } from 'vue';

const getColors = () => {
    const colors = ref([]);
    const error = ref('');
    const load = async (query) => {
        try {
            let apiUrl = '';
    
            switch (query) {
                case '':
                    apiUrl = 'https://color-serve.onrender.com/api/colors/';
                    break;
                case 'light':
                    apiUrl = 'https://color-serve.onrender.com/api/themes/light';
                    break;
                case 'dark':
                    apiUrl = 'https://color-serve.onrender.com/api/themes/dark';
                    break;
                default:
                    apiUrl = `https://color-serve.onrender.com/api/groups/${query}`;
            }
            
            const response = await fetch(apiUrl);
            const data = await response.json();
            colors.value = data.data || [];
        } catch (error) {
            error.value = error.message;
            console.log(error);
        }
    };
    
    return { colors, error, load };
};

export default getColors;
