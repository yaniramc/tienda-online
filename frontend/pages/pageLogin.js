import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PageLogin() {
    return (
        <>

            <Header></Header>

            <div className="container-fluid banner-login">
                <div className="container py-5 mt-3">
                    <div className="row d-flex justify-content-end py-5">
                        <div className="col-sm-4 py-5 form-login">
                            <h1>Inicia Sesión</h1>
                            <div className="mb-3 pt-3">
                                <label htmlFor="userName" className="form-label">Usuario</label>
                                <input type="text" className="form-control" id="userName"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Contraseña</label>
                                <input type="text" className="form-control" id="password"/>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <button type="button" className="btn generic-button btn-lg">Entrar</button>
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