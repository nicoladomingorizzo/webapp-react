import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center gap-5 mt-5">
                <h1>404 - La pagina non è stata trovata</h1>
                <p className="fs-3">La pagina che stai cercando non esiste</p>
                <p className="fs-3">Ci dispiace per l'invonveniente</p>
                <p className="fs-3">Clicca qui</p>
                <p className="fs-1">⬇</p>
                <Link className="btn btn-dark fs-1 mb-5" to={'/'}>Torna alla Home</Link>
            </div>
        </div>
    )
}