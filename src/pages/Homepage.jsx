import { Link } from "react-router-dom"

export default function Homepage() {
    return (
        <>

            <main className="container my-5 mx-auto text-center">
                <div className="container my-5 py-5">
                    <div className="row text-center mb-5">
                        <div className="col-lg-10 mx-auto">
                            <h1 className="display-3 fw-bold mb-4">
                                La tua bussola nel vasto universo del cinema
                            </h1>
                            <p className="lead text-muted mb-4">
                                Benvenuto su <strong>Movies Rubati (non siamo a Naples)</strong>, il portale definitivo per chi vive di pellicole, trame indimenticabili e personaggi che hanno fatto la storia. Che tu sia un appassionato di film d'autore, un divoratore di blockbuster o un purista dei grandi classici, qui troverai la tua casa. Esplora il nostro catalogo, leggi le recensioni dei film più attesi e scopri le notizie che agitano il mondo di Hollywood.
                            </p>
                        </div>
                    </div>

                    <hr className="my-5" />

                    <div className="row text-center g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm p-4">
                                <i className="fas fa-ticket-alt fa-3x text-primary mb-3"></i>
                                <h3 className="h5 fw-bold">Recensioni Oneste</h3>
                                <p className="text-muted">
                                    Non perderti in giudizi superficiali. Le nostre recensioni sono scritte da veri cinefili, per darti un'opinione sincera e approfondita su ogni nuova uscita.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm p-4">
                                <i className="fas fa-film fa-3x text-primary mb-3"></i>
                                <h3 className="h5 fw-bold">Un Database Completo</h3>
                                <p className="text-muted">
                                    Dal cinema muto ai successi più recenti, il nostro archivio cresce ogni giorno. Trova informazioni su cast, registi, premi e curiosità che non conoscevi.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm p-4">
                                <i className="fas fa-newspaper fa-3x text-primary mb-3"></i>
                                <h3 className="h5 fw-bold">Notizie e Approfondimenti</h3>
                                <p className="text-muted">
                                    Rimani aggiornato sulle ultime novità, i trailer più virali e gli scoop dal dietro le quinte. Tutto il mondo del cinema a portata di click.
                                </p>
                            </div>
                        </div>
                    </div>

                    <hr className="my-5" />

                    <div className="row text-center">
                        <div className="col-lg-8 mx-auto">
                            <h2 className="h3 fw-bold mb-3">Sei pronto a iniziare il tuo viaggio cinematografico?</h2>
                            <p className="lead text-muted mb-4">
                                Che la tua ricerca sia guidata dalla curiosità o dalla voglia di scoprire il tuo prossimo film preferito, noi siamo qui per accompagnarti.
                            </p>
                            <Link to="/movies" className="btn btn-primary btn-lg me-2">Esplora i Film</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}