export const getAllCities = async () => {
    return fetch('cities')
    .then(data => data.json())
}

export const getAllCitiesLocal = () => {
    return new Promise((resolve, reject) => {
        let data = require('../static/cities.json')
        data ? resolve(data) : reject()
    })
}