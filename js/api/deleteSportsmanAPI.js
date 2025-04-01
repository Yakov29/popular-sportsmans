export const deleteSportsmanAPI = async (data) => {
    return await fetch(`https://669a78899ba098ed61ffc5a3.mockapi.io/sportsmans/${data.id}`, {
        method: "DELETE",
    }).then(() => console.log("DELETED"))
}
