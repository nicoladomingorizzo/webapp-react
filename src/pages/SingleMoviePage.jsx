import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useLoaderContext } from "../context/LoaderContext";
import FormReview from "../components/FormReview";
import Loader from "../components/Loader";

export default function SingleMoviePage() {

    const { id } = useParams();
    const apiUrl = `http://localhost:3030/api/movies/${id}`;
    const [movie, setMovie] = useState('');
    const [reviews, setReviews] = useState([]);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const navigate = useNavigate();
    const { isLoading } = useLoaderContext;

    useEffect(() => {

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMovie(data)
                setReviews(data.reviews)
            })
    }, [id]);

    useEffect(() => {
        function handleKeyNavigation(e) {
            switch (e.key) {
                case 'ArrowLeft':
                    if (movie.id > 1) {
                        navigate(`/movies/${parseInt(movie.id) - 1}`);
                    }
                    break;
                case 'ArrowRight':
                    if (movie.id < 5) {
                        navigate(`/movies/${parseInt(movie.id) + 1}`);
                    }
                    break;
                case 'Escape':
                    navigate('/movies');
                    break;
                default:
                    break;
            }
        }

        window.addEventListener('keydown', handleKeyNavigation);

        return () => {
            window.removeEventListener('keydown', handleKeyNavigation);
        };
    }, [movie.id, navigate]);

    useEffect(() => {
        if (reviews?.length > 0) {
            //imposto l'interval
            const timer = setInterval(() => {
                //prendo la recensione corrente e passo alla successiva e con l'operatore % faccio si che quando arriva a 0 ricomincia
                setCurrentReviewIndex(prevIndex => (prevIndex + 1) % reviews.length);
            }, 3000); // 3000 millisecondi = 3 secondi

            return () => clearInterval(timer); // Pulizia del timer se usciamo dalla pagina o 
        }
    }, [reviews]);

    if (!movie?.id) {
        return (
            <p className="text-center my-5 fs-3">
                Non ci sono film validi a questo indirizzo. <br />
                <button className="btn btn-outline-primary my-5" onClick={() => navigate('/movies')}>
                    Torna alla sezione film
                </button>
            </p>
        );
    }


    return (
        <>

            {isLoading && (
                <Loader />
            )};

            <main className="container my-5 mx-auto text-center">
                <div className="d-flex justify-content-end me-5 mb-3">
                    <button className="btn btn-outline-dark text-right"
                        onClick={e => { navigate('/movies') }}>X</button>
                </div>
                <div className="d-flex justify-content-around gap-3">
                    <button className='btn btn-outline-dark text-right'
                        disabled={movie.id === 1}
                        onClick={e => { navigate(`/movies/${parseInt(movie.id - 1)}`) }}>Prececente</button>
                    <button className={`btn btn-outline-dark text-right`}
                        disabled={movie.id === 5}
                        onClick={e => { navigate(`/movies/${parseInt(movie.id + 1)}`) }}>Successivo</button>
                </div>
                <h1 className="mb-3 mt-5 "><b>Titolo del film: {movie.title}</b></h1>
                <section className="row row-cols-1 row-cols-md-2 mx-auto my-5 h-100">
                    <figure className="col h-100">
                        <img className='rounded mt-3 img-fluid' src={movie.image} alt={movie.title} style={{ height: '500px' }} />
                    </figure>
                    <div className=" d-flex flex-column justify-content-between pt-5 gap-3 col h-100">
                        <p className="py-1"><b>Anno <br /></b>{movie.release_year}</p>
                        <p className="py-1"><b>Diretto da <br /></b>{movie.director}</p>
                        <p className="py-1"><b>Genere <br /></b>{movie.genre}</p>
                        <p className="py-1"><b>Trama <br />
                        </b>{movie.abstract}</p>
                    </div>
                </section>
                <section>
                    <h5 className="pt-2">Di seguito le recensioni</h5>
                    <div className="row mx-auto">
                        {reviews.length > 0 ? (
                            <div className="col mx-auto h-50 my-5">
                                <div className="card mx-auto">
                                    <div className="card-body bg-body-tertiary">
                                        <div className="name py-2">
                                            <b>Nome </b><br />{reviews[currentReviewIndex].name}
                                        </div>
                                        <div className="text py-2">
                                            <b>Recensione </b><br />{reviews[currentReviewIndex].text}
                                        </div>
                                        <div className="vote py-2">
                                            <b>Voto </b><br />{reviews[currentReviewIndex].vote}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-center my-5">Nessuna recensione ancora. Scrivine una per primo.</p>
                        )}
                    </div>
                </section>
                <section>
                    <FormReview />
                </section>
            </main>

        </>
    )
}