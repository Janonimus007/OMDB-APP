import axios from "axios";

export const omdbapi = axios.create({
    baseURL:`https://www.omdbapi.com/?apikey=13a302dc&`,
    timeout:7000,//Tiempo de espera de 7 segundos
    headers:{
        'Authorization':'application/json'
    }

})
