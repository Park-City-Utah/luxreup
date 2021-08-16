import { create } from 'apisauce';

const apiClient = create({ 
    baseURL: 'http://192.168.117.08:9000/api',
});

export default apiClient;

/*apiClient.get('/listings').then(response => {
    if (!response.ok) {
        response.problem;
    }
})*/