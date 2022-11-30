import Axios from 'axios';

export const getMovies = (link, token) => {
    return new Promise((resolve, reject) => {
        Axios.get(link, {
                headers: {
                    Authorization: `Token ${token}`,
                },
                timeout: 3000,
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => reject(err));
    });
};