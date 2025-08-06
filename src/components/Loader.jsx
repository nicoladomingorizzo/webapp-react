export default function Loader() {
    return (

        <>

            <div className="d-flex justify-content-center align-items-center mt-5">
                <p className="me-3 fs-4">Caricamento</p> {/* Messaggio esistente */}
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

        </>
    )
}