import { useState } from "react";

export default function FormReview() {

    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [vote, setVote] = useState('');

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


    return (
        <form className="card mx-auto bg-body-tertiary" onSubmit={handleReviewSubmit}>
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
                <div className="mb-3 d-flex flex-column flex-wrap justify-content-around g-3 align-items-center">
                    <select className="form-select form-select-lg w-50 text-center mb-3"
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
                    <button className="btn btn-outline-primary py-2 px-4 mt-3"><i className="bi bi-send pe-2"></i>Invia</button>
                </div>
            </div>
        </form>
    )
}