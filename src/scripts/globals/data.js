const get_all_data = () => {
    return new Promise((resolve, reject) => {
        fetch(`https://restaurant-api.dicoding.dev/list`).then((response) => {
            return response.json();
        }).then((data) => {
            resolve(data);
        }).catch((error) => {
            reject(error);
        });
    });
}

export { get_all_data };