

const url = "https://669a78899ba098ed61ffc5a3.mockapi.io/sportsmans"


export const getSportsmanAPI = async (data) => {
    return await fetch(url).then((data) => data.json())
    
}



