import MovieCard from './MovieCard';
import { useMoviesContext } from '../context/MoviesContext';
import { Link } from 'react-router-dom';

export default function MoviesList() {

    const { movies, isError } = useMoviesContext();

    return (
        <main className="container my-5 mx-auto text-center">
            <div className="d-flex justify-content-end">
                <Link to={'/'}><button className='btn btn-outline-dark mt-3 me-3 mb-5 p-2 '>Torna alla Home</button></Link>
            </div>
            <h1>Tutti i Nostri Film Rubati</h1>
            <section className=" mt-3">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 text-center mx-auto">
                    {movies.map(movie => {
                        return (
                            <div key={movie.id} className="col my-3">
                                <MovieCard movie={movie} />
                            </div>
                        )
                    })}
                </div>
            </section>

        </main>
    )
}