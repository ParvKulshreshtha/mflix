import './App.css';
import {Row} from "./components/Row"
import requests from './requests';

function App() {
  return (
    <div className="App">
      <div className='logo'>Mflix</div>
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Most Loved" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documenteries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
