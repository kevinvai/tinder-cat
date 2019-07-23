//default values
const baseUrl = process.env.REACT_APP_API_PATH;
const headers = {
    'api_key': 'g00dLuCk',
}

//api endpoints
const getRandomCatImg = () => {
    return fetch(baseUrl, {
        headers: {'api_key': 'g00dLuCk',}
    }).then(response => response.json())
}

const addToFavorites = async (id) => {
    //post to API   
    const url = `${baseUrl}/fav/${id}`;  
    //fetch logic
    return fetch(url, {
        method: 'POST',
        headers: headers,
    })
}

const getFavs = () => {
    const url2 = `${baseUrl}/fav`

    return fetch(url2, {
        headers: headers
    }).then(response => response.json())
}
    
const deleteFav = (id) => {
    //find id in collection and create new array without it
    const url = `${baseUrl}/fav/${id}`;  
    //fetch logic
    return fetch(url, {
        method: 'DELETE',
        headers: headers,
    })
}

export {
    getRandomCatImg,
    addToFavorites,
    getFavs,
    deleteFav
}