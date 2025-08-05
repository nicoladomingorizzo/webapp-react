import { Link } from "react-router-dom"
import AppHeader from "../../components/AppHeader"

export default function DashboardPage() {
    return (
        <>

            <div className="container-fluid">
                <div className="row d-flex justify-content-around align-items-center">
                    {/* Menù dinamico */}
                    <div className="col-3">
                        <div className="list-group my-5">
                            <a href="#" className="list-group-item list-group-item-action active">Active item</a>
                            <a href="#" className="list-group-item list-group-item-action ">Item</a>
                            <a href="#" className="list-group-item list-group-item-action disabled">Disabled item</a>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="d-flex justify-content-between align-items-center py-3">
                            <h1>Dashboard</h1>
                            <Link to='/admin/movie/create' className="btn btn-outline-primary py-2">Aggiungi un Film</Link>
                        </div>
                        <p className="py-3">Qui puoi gestire la tua applicazione</p>
                        <div
                            className="table-responsive pb-5">
                            <table
                                className="table table-striped table-hover table-borderless table-primary align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>Column 1</th>
                                        <th>Column 2</th>
                                        <th>Column 3</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    <tr
                                        className="table-light">
                                        <td scope="row">Item</td>
                                        <td>Item</td>
                                        <td>Item</td>
                                    </tr>
                                    <tr
                                        className="table-light">
                                        <td scope="row">Item</td>
                                        <td>Item</td>
                                        <td>Item</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
