import './App.css'
import withResults from './mocks/with-results.json'
import noResults from './mocks/no-results.json'

function App() {
  const movies = withResults.Search
  const hasMovies = movies?.length > 0

  return (
    <div className='page'> 
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input type="text" placeholder='Avengers, Start Wars, The Matrix ...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {
          hasMovies
          ? (
            <ul>
              movies.map( movie => (
                <li key={movie.}
              

            ))
            </ul>
          )
        }
      </main>
    </div>
  )
}

export default App
