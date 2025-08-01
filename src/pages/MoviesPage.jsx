import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MoviesPage() {

    const apiUrl = 'http://localhost:3030/api/movies/';
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMovies(data)
            })
            .catch(err => {
                alert('Errore durante il caricamento. Riprova più tardi.');
            })
    }, [])

    return (
        <>
            <main className="container my-5 mx-auto text-center">
                <h1>Tutti i Nostri Film Rubati</h1>
                <section className=" mt-3">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 text-center mx-auto">
                        {movies.map(movie => {
                            return (
                                <div key={movie.id} className="col my-3">
                                    <div className="card h-100 border-0">
                                        <figure className="card-img h-100">
                                            <img className="h-100 w-100 object-fit-contain ratio ratio-1x1" src={movie.image} alt={movie.title} />
                                        </figure>
                                        <div className="card-body h-100 hidden d-flex flex-column justify-content-between py-3">
                                            <h3 className="py-1"><b>Titolo: </b>{movie.title}</h3>
                                            <p className="py-1"><b>Anno: </b>{movie.release_year}</p>
                                            <p className="py-1"><b>Diretto da: </b>{movie.director}</p>
                                            <p className="py-1"><b>Genere: </b>{movie.genre}</p>
                                            <p className="py-1"><b>Trama: </b>{movie.abstract}</p>
                                            <Link className='link-underline link-underline-opacity-0' to={`/movies/${movie.id}`}>Visualizza dettagli film</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

            </main>

        </>
    )
}