import './App.css';
import {Row} from "./components/Row"
import requests from './requests';

const Row_Type = [
  {
    title:"Trending",
    fetchUrl:requests.fetchTrending
  },
  {
    title:"Originals",
    fetchUrl:requests.fetchNetflixOriginals
  },
  {
    title:"Loved",
    fetchUrl:requests.fetchTopRated
  },
  {
    title:"Action",
    fetchUrl:requests.fetchActionMovies
  },
  {
    title:"Comedy",
    fetchUrl:requests.fetchComedyMovies
  },
  {
    title:"Horror",
    fetchUrl:requests.fetchHorrorMovies
  },
  {
    title:"Romance",
    fetchUrl:requests.fetchRomanceMovies
  },
  {
    title:"Documenteries",
    fetchUrl:requests.fetchDocumantaries
  },
]

function App() {
  const content = Row_Type.map((genre,index) => {
    return(
    <Row title={genre.title} fetchUrl={genre.fetchUrl} key={index} />)
  })
  return (
    <div className="App">
      <div className='logo'>Mflix</div>
      {content}
    </div>
  );
}

export default App;
