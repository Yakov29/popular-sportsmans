const url = "https://669a78899ba098ed61ffc5a3.mockapi.io/favorites"

export const getFavoritesAPI = async ()  => {
    return await fetch(url).then(data => data.json())
}

