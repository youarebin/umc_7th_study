import './App.css'
import { MOVIES } from './mocks/movies'

function App() {

  return (
    <div className='moviesContainer'>
      {MOVIES.results.map((movie) => (
        <div key={movie.id} className='movieItem'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='영화 포스터' />
          <div className='overView'/>
        </div>
      ))}
    </div>
  )
}

export default App
