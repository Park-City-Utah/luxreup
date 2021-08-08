import { create } from 'apisauce';

const apiClient = create({ 
    baseURL: 'http://192.168.0.06:9000/api',
});

export default apiClient;

/*apiClient.get('/listings').then(response => {
    if (!response.ok) {
        response.problem;
    }
})*/