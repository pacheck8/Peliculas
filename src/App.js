import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className='bg-gray-300 min-h-screen '>
      <div className='bg-gray-700 flex items-center justify-center text-white mb-2.5'>Buscador De Peliculas</div>
      <Main/>
    </div>
  );
}

export default App;
