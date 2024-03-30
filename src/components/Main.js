import { useEffect, useState } from "react";
import axios from "axios";
import MovieModal from "./MovieModal";

//api url   

const api = "https://www.omdbapi.com/?"

//api key

const apikey= 'apikey=18eaeb4f'

const Main =() => {
    const [name,setName] = useState('');
    const [movies,setMovies] = useState([])
    const [selectedId,setSelectedId]=useState(null)
    const [movieDetails, setMovieDetails] = useState({})
    
    const[show,setShow]=useState(false)

    const showModal = () => {
        setShow(true)
      }
    
      const hideModal = () => {
    
        setShow(false)
        setMovieDetails()
      }
    
      const handleClose = () => {
        hideModal()
      }

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
    setSelectedId(id)
    axios
    .get(api + apikey + `&i=${id}`)
    .then((res) => {
      if (res) {
        setMovieDetails(res.data)
        showModal();
      }
    })
}
const handleSubmit= (e) =>{
    e.preventDefault();
    getInfo();
    }

    return(
        <div>
            <form className="flex items-center justify-center text-black mb-2.5">
                <div className="busqueda">
                <label htmlFor="name"></label>
                <input className="w-56"
                type='text'
                name='name'
                placeholder="Pelicula"
                onChange={(e)=> setName(e.target.value)}></input> 
                <button className="bg-sky-300 hover:bg-sky-500 text-white px-4 ml-1 rounded" type='submit'onClick={(e) => handleSubmit(e) }>Buscar</button>  
                </div>
            </form>
            {movies ?
            <div className="flex flex-col justify-center items-center text-white mb-2.5">
                {movies.map(movie => (
                <div key={movie.imdbID} className="movie">
                <img src={movie.Poster} alt=""/>
                <div className="text-black">
                <p>{movie.Title}</p>
                </div>
                <button className="movie-detailsBtn"
                onClick={e => getDetails(e,movie.imdbID)} >Details</button>
 
            {movieDetails && (selectedId===movie.imdbID) && show ? 
            <MovieModal 
            movieInfo={movieDetails} 
            handleClose={handleClose}/> : 
  <div className="hidden"></div>
} 

          </div>))}
      </div> 
      : null}
        </div>
    )
}
export default Main