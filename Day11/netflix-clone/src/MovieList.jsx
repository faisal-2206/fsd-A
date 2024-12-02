import "./MovieList.css";
import movies from "./movies";


export const MovieList = () => {
  return (
    <div className="movie-list">
        {movies.map((movie)=>
        (<div key={movie.id} className="movie-card">
            <img src={movie.image}/>
            <h1></h1>
            <h2></h2>
            <h2></h2>
        </div>
    ))}
    </div>
  )
}
export default MovieList;