import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8000';
const apiService = {
    login(email, password) {
        return axios
            .post(`${BASE_URL}/api/login`, {
                email,
                password,
            })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('token', response.data);

                    return response;

                }
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    return error.response.data
                }

                return error;
            })
    },
    getLoggedinUserData() {
        const token = localStorage.getItem('token');
        return axios.get(`${BASE_URL}/api/getLoggedinUserData`, {
            headers: {
                Authorization: `Bearer ${token}` // Replace `token` with the actual token value
            }
        })
            .then(response => {
                // Handle the successful response
                const userData = response.data;
                return userData
                // Process the user data as needed
            })
            .catch(error => {
                // Handle the error response
                console.error(error);
            });
    },

    getPost(id) {
        const token = localStorage.getItem('token');
        return axios.get(`${BASE_URL}/api/posts/${id}`, {
            headers: {
                Authorization: `Bearer ${token}` // Replace `token` with the actual token value
            }
        })
            .then(response => {
                // Handle the successful response
                const post = response.data;
                return post
                // Process the user data as needed
            })
            .catch(error => {
                // Handle the error response
                console.error(error);
            });
    },

    getPosts() {
        const token = localStorage.getItem('token');
        return axios.get(`${BASE_URL}/api/posts`, {
            headers: {
                Authorization: `Bearer ${token}` // Replace `token` with the actual token value
            }
        })
            .then(response => {
                // Handle the successful response
                const posts = response.data;
                return posts
                // Process the user data as needed
            })
            .catch(error => {
                // Handle the error response
                console.error(error);
            });
    }
    // Add other API methods as needed
};

export default apiService;
