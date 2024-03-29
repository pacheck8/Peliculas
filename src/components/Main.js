import { useEffect, useState } from "react";
import axios from "axios";

//api url   

const api = "https://www.omdbapi.com/?"

//api key

const apikey= 'apikey=18eaeb4f'

const Main =() => {
    const [name,setName] = useState('');
    const [movies,setMovies] = useState([])
    const [movieDetails, setMovieDetails] = useState({})

//respuesta
const getInfo=()=> {
    axios
    .get(api+apikey+`&s=${name}`+ "&type=movie" + "&page=1")
    .then((res) => {
        if(res){
            setMovies(res.data.Search);
        }
    });    
};

  //get details
  const getDetails = (e, id) => {
    e.preventDefault()

    axios
    .get(api + apikey + `&i=${id}`)
    .then((res) => {
      if (res) {
        setMovieDetails(res.data)
      }
    })
  }
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
            {movies ?
            <div className="movies">
                {movies.map(movie => (
                <div key={movie.imdbID} className="movie">
                <img src={movie.Poster} alt=""/>
                <div className="movie-title">
                <p>{movie.Title}</p>
                </div>
                <button className="movie-detailsBtn"
                onClick={e => getDetails(e,movie.imdbID)} >Details</button>

          </div>))}
      </div> 
      : null}
        </div>
    )
}
export default Main