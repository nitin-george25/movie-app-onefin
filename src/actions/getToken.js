import Axios from 'axios';

export const getToken = (username, password) => {
    console.log('get token', username, password);
    return new Promise((resolve, reject) => {
        Axios.post(
                'https://demo.credy.in/api/v1/usermodule/login/', {
                    username: username,
                    password: password,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => reject(err));
    });
};