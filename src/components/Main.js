import { useEffect, useState } from "react";
import axios from "axios";

//api url   

const api = "https://www.omdbapi.com/?"

//api key

const apikey= 'apikey=18eaeb4f'

const Main =() => {
    const [name,setName] = useState('')

//respuesta
const getInfo=()=> {
    axios
    .get(api+apikey+`&s=${name}`+ "&type=movie" + "&page=1")
    .then((res) => {
        if(res){
            console.log(res.data);
        }
    });    
};
const handleSubmit= (e) =>{
    e.preventDefault();
    getInfo();
}
    return(
        <div>
            <form>
                <div className="busqueda">
                <label htmlFor="name"></label>
                <input
                type='text'
                name='name'
                placeholder="Pelicula"
                onChange={(e)=> setName(e.target.value)}></input> 
                <button type='submit'onClick={(e) => handleSubmit(e) }>Buscar</button>  
                </div>
            </form>
        </div>
    )
}
export default Main