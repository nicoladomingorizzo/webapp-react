import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SingleMoviePage() {

    const { id } = useParams();
    const apiUrl = `http://localhost:3030/api/movies/${id}`;
    const [movie, setMovie] = useState('');
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMovie(data)
            })
    }, [])

    return (
        <>

            <main className="container my-5 mx-auto text-center">
                <h1><b>Titolo del film: {movie.title}</b></h1>
                <section className="d-flex justify-content-between gap-3 w-75 mx-auto my-5">
                    <figure>
                        <img className='rounded mt-3' src={movie.image} alt={movie.title} />
                    </figure>
                    <div className=" d-flex flex-column justify-content-evenly">
                        <p className="py-1"><b>Anno <br /></b>{movie.release_year}</p>
                        <p className="py-1"><b>Diretto da <br /></b>{movie.director}</p>
                        <p className="py-1"><b>Genere <br /></b>{movie.genre}</p>
                        <p className="py-1"><b>Trama <br />
                        </b>{movie.abstract}</p>
                    </div>
                </section>
                <section>
                    <div className="row row-cols-1 w-75 mx-auto">
                        <div className="col">
                            <div className="card">
                                <div className="card-top py-2">
                                    <h5>Recensione</h5>
                                </div>
                                <div className="card-body">
                                    <div className="name">
                                        Nome:
                                    </div>
                                    <div className="text">
                                        Testo:
                                    </div>
                                    <div className="vote">
                                        Voto:
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <form className="card w-75 mx-auto">
                        <div className="card-top">
                            <h3 className="my-3">Lascia una recensione, se ti va</h3>
                        </div>
                        <div className="card-body">

                            <div className="my-1">
                                <label htmlFor="name" className="form-label">Nome</label>
                                <input type="name" className="form-control w-75 mx-auto" id="name" placeholder="Digita il tuo nome..." />
                            </div>
                            <div className="my-3">
                                <label htmlFor="review" className="form-label" >Lascia una recensione</label>
                                <textarea className="form-control w-75 mx-auto" id="review" rows="3"></textarea>
                            </div>
                            <div className="mb-3 d-flex justify-content-around align-items-center">
                                <select className="form-select form-select-lg mb-3 w-25 text-center" aria-label="Large select example">
                                    <option value="default">Dai un voto da 1 a 5</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="3">4</option>
                                    <option value="3">5</option>
                                </select>
                                <button className="btn btn-outline-primary py-2 px-3"><i className="bi bi-floppy"></i>Invia</button>
                            </div>
                        </div>
                    </form>
                </section>
            </main>

        </>
    )
}