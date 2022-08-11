import axios from 'axios';
const API_URL = 'http://localhost:8081/api/auth/';
class AuthService {
    login(user) {
    return axios
    .post(API_URL + 'signin', {
        email: user.email,
        password: user.password
    })
    .then(response => {
        if (response.data.accessToken) {
    localStorage.setItem('user', JSON.stringify(response.data));
        }
        console.log(response)
        return response.data;
    });
    }
    logout() {
    localStorage.removeItem('user');
    }
    register(user) {
    return axios.post(API_URL + 'signup', {
    laboratory: user.laboratory,
    username: user.username,
    email: user.email,
    password: user.password
    });
}
}
export default new AuthService();