import Link from "next/link";

export default function Header() {
    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/"></Link>
                    <img src="/images/logo.svg" width={250} height={250} alt="carrito-compra"/>

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
                                <Link className="nav-link btn nav-link text-white me-md-2" type="button" href="#">Iniciar
                                    sesión
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-registrate nav-link text-white" type="button"
                                   href="#">Regístrate
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}