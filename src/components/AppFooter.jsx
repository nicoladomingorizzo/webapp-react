export default function AppFooter() {
    return (
        <footer className="bg-black text-white pt-5 pb-4">
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-around align-items-center text-center text-md-start">

                    <ul className="list-unstyled mb-4">
                        <li className="mb-3">
                            <h5 className="text-uppercase fw-bold text-primary">Film</h5>
                        </li>
                        <li><a href="#" className="text-white text-decoration-none">In sala</a></li>
                        <li><a href="#" className="text-white text-decoration-none">Prossimamente</a></li>
                        <li><a href="#" className="text-white text-decoration-none">Film cult</a></li>
                        <li><a href="#" className="text-white text-decoration-none">Recensioni</a></li>
                    </ul>

                    <ul className="list-unstyled mb-4">
                        <li className="mb-3">
                            <h5 className="text-uppercase fw-bold text-primary">Informazioni</h5>
                        </li>
                        <li><a href="#" className="text-white text-decoration-none">Chi siamo</a></li>
                        <li><a href="#" className="text-white text-decoration-none">Contatti</a></li>
                        <li><a href="#" className="text-white text-decoration-none">Lavora con noi</a></li>
                        <li><a href="#" className="text-white text-decoration-none">FAQ</a></li>
                    </ul>

                    <ul className="list-unstyled mb-4">
                        <li className="mb-3">
                            <h5 className="text-uppercase fw-bold text-primary">Legale</h5>
                        </li>
                        <li><a href="#" className="text-white text-decoration-none">Termini e condizioni</a></li>
                        <li><a href="#" className="text-white text-decoration-none">Informativa sulla privacy</a></li>
                        <li><a href="#" className="text-white text-decoration-none">Cookie Policy</a></li>
                        <li><a href="#" className="text-white text-decoration-none">Disclaimer</a></li>
                    </ul>
                </div>

                <hr className="mb-4" />

                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-6 text-center text-md-start mb-3 mb-md-0">
                        <p className="mb-0">© 2025 Copyright :
                            <a href="#" className="text-white text-decoration-none">
                                <strong> Movies Rubati (non siamo a Naples) </strong>
                            </a>
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-6 text-center text-md-end">
                        <a href="#" className="btn btn-outline-light btn-floating m-1" role="button">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="btn btn-outline-light btn-floating m-1" role="button">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="#" className="btn btn-outline-light btn-floating m-1" role="button">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}