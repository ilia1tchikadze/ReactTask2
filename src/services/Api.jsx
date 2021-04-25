const baseUrl = "https://jsonplaceholder.typicode.com"

export class Api_Service {
    static getNoteList ({callBack, start, limit}){
        const url = `${baseUrl}/todos??_start=${start}&_limit=${limit}`

        fetch (url)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            callBack(result)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
}

export default Api_Service