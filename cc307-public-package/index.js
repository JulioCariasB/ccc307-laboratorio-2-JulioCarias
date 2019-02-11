var fetch = require('node-fetch');

returnUsers = (appToken, userInfo) => {

    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => resolve(json))
    });
    
};

module.exports = {
    returnUsers
};