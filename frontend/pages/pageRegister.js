import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PageLogin() {
    return (
        <>

            <Header></Header>

            <div className="banner-register">
                <div className="container py-5 mt-3 container-register">
                    <div className="row d-flex justify-content-center align-self-center py-5 content-register">
                        <div className="col-sm-4 py-5 text-white">
                            <h1>Crear cuenta</h1>
                            <div className="mb-3 pt-3">
                                <label htmlFor="userName" className="form-label">Nombre de usuario</label>
                                <input type="text" className="form-control" id="userName"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input type="text" className="form-control" id="password"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Repita la contraseña</label>
                                <input type="text" className="form-control" id="password"/>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <button type="button" className="btn btn-secondary btn-lg">Crear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
};