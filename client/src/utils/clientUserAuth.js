import axios from 'axios';

export default {
	userToken: function() {
		return (axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken'));
	},
	userRegister: function(obj) {
		return axios.post('/api/auth/register', obj, function(res) {
			// changed the data being sent in request
			if (res.status === 200) {
				console.log('success');
			}
		});
	},
	userLogin: function(obj) {
        console.log("  In clientUserAuth API: ", obj)
		return console.log(axios.post('/api/user/login', obj));
	},
	userLogout: function(obj) {
		localStorage.removeItem('jwtToken');
	},
	setLocalStorage: function(userData) {
		localStorage.setItem('jwtToken', userData.token);
	},
	getLocalStorage: function(key) {
		return localStorage.getItem(key);
	}
};