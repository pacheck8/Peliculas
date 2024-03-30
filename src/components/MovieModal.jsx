const MovieModal = ({movieInfo,handleClose}) =>{
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          {/* Fondo semitransparente */}
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
          {/* Contenedor del modal */}
          <div className="relative bg-white rounded-lg max-w-lg mx-auto p-8">
            {/* Contenido del modal */}
            <div className="modal-body flex justify-between mt-6">
  
            </div>
            <div className='text-black'>
          <p>
            <b className='text-black'>Actors:</b> {movieInfo.Actors}
          </p>
          <p>
            <b>Genre:</b> {movieInfo.Genre}
          </p>
          <p>
            <b>Director:</b> {movieInfo.Director}
          </p>
          <p>
            <b>Released:</b> {movieInfo.Released}
          </p>
          <p>
            <b>Plot:</b> {movieInfo.Plot}
          </p>
        </div>
  
            {/* Botón de cerrar modal */}
            <button className="modal-closebtn py-4 px-8 text-lg font-semibold transition duration-500 ease-in-out bg-white text-black border border-black rounded-md hover:bg-black hover:text-white"onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  export default MovieModal
  

