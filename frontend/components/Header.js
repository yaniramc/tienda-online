import Link from "next/link";

export default function Header() {
    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <img src="/images/logo.svg" width={150} height={150} alt="carrito-compra"/>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">Inicio</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link" href="/pageShoppingCart">Tu carrito
                                    <img src="/images/carrito.png" alt="carrito-compra" width={25} height={25}/>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn generic-button nav-link text-white me-md-2" type="button" href="/pageLogin">Iniciar
                                    sesión
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-secondary nav-link text-white" type="button"
                                   href="/pageRegister">Regístrate
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}