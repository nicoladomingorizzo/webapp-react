import { NavLink } from "react-router-dom"

export default function AppHeader() {
    return (
        <header>
            <nav
                className="navbar navbar-expand-sm navbar-dark bg-black">
                <div className="container d-flex justify-content-between align-items-center my-3">
                    <NavLink className="navbar-brand" to="/about">Movies Rubati (non siamo a Naples)</NavLink>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" aria-current="page">
                                    Homepage
                                    <span className="visually-hidden">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/movies">
                                    Film
                                </NavLink>
                            </li>
                        </ul>
                        {/* Lo lascio non si sa mai */}
                        <form className="d-flex my-2 my-lg-0">
                            <input
                                className="form-control me-sm-2"
                                type="text"
                                placeholder="Cerca" />
                            <button
                                className="btn btn-outline-primary my-2 my-sm-0"
                                type="submit">
                                Cerca
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header >
    )
}