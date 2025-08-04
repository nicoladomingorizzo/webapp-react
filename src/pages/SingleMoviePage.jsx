import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function SingleMoviePage() {

    const { id } = useParams();
    const apiUrl = `http://localhost:3030/api/movies/${id}`;
    const [movie, setMovie] = useState('');
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [vote, setVote] = useState('');
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMovie(data)
                setReviews(data.reviews)
            })
    }, [id]);

    function handleReviewSubmit(e) {
        e.preventDefault();
        if (!name.trim() || !text.trim() || vote === '') {
            alert('Per favore, compila tutti i campi e scegli un voto valido.');
            return;
        }

        const newReview = {
            name,
            text,
            vote: parseInt(vote)
        };

        fetch(`http://localhost:3030/api/movies/${id}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                setReviews(prev => [...prev, data]);
                setName('');
                setText('');
                setVote('');
            })
            .catch(err => console.error('Errore invio recensione:', err));
    };


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
        if (reviews.length > 0) {
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
                    <div className="row mx-auto w-50">
                        {reviews.length > 0 ? (
                            <div className="col d-flex flex-wrap gap-3 justify-content-between mx-auto w-75 h-50 my-5">
                                <div className="card w-75 mx-auto">
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
                {/* <section>
                    <h5 className="pt-2">Di seguito le recensioni</h5>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 mx-auto w-75">
                        <div className="col d-flex flex-wrap gap-3 justify-content-between mx-auto w-75 h-50 my-5">
                            {reviews.map(review => {
                                return (
                                    <div className="card w-100 mx-auto" key={review.id}>
                                        <div className="card-body">
                                            <div className="name py-2">
                                                <b>Nome </b><br />{review.name}
                                            </div>
                                            <div className="text py-2">
                                                <b>Recensione </b><br />{review.text}
                                            </div>
                                            <div className="vote py-2">
                                                <b>Voto </b><br />{review.vote}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section> */}
                <section>
                    <form className="card w-75 mx-auto bg-body-tertiary" onSubmit={handleReviewSubmit}>
                        <div className="card-top">
                            <h3 className="my-3">Lascia una recensione, se ti va</h3>
                        </div>
                        <div className="card-body">

                            <div className="my-1">
                                <label htmlFor="name" className="form-label">Nome</label>
                                <input type="text" className="form-control w-75 mx-auto" id="name" placeholder="Digita il tuo nome..."
                                    value={name}
                                    onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="my-3">
                                <label htmlFor="review" className="form-label" >Lascia una recensione</label>
                                <textarea className="form-control w-75 mx-auto"
                                    id="review"
                                    rows="3"
                                    value={text}
                                    onChange={e => setText(e.target.value)}></textarea>
                            </div>
                            <div className="mb-3 d-flex justify-content-around align-items-center">
                                <select className="form-select form-select-lg mb-3 w-25 text-center"
                                    aria-label="Large select example"
                                    value={vote}
                                    onChange={e => setVote(e.target.value)}>
                                    <option value="">Dai un voto da 1 a 5</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <button className="btn btn-outline-primary py-2 px-3"><i className="bi bi-floppy pe-2"></i>Invia</button>
                            </div>
                        </div>
                    </form>
                </section>
            </main>

        </>
    )
}