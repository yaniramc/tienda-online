import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row py-5 text-center">
                    <div className="col-sm-12 col-md-4 text-white">
                        <h3 className="pb-2">Contacto</h3>
                        <ul>
                            <p>Teléfono - <Link href="tel:911 00 22 33" className="text-decoration-none contacto">911 00 22 33</Link></p>
                            <p>Email - <Link href="mailto:empresa@baks.com" className="text-decoration-none contacto">empresa@baks.com</Link></p>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-4 text-white">
                        <h3 className="pb-2">Nuestras Oficinas</h3>
                        <p>Tienda Baks Valencia</p>
                        <p>Tienda Baks Málaga</p>
                        <p>Tienda Baks Madrid</p>
                    </div>
                    <div className="col-sm-12 col-md-4 text-white">
                        <h3 className="pb-2">Atención al cliente</h3>
                        <p>Horario para atención al cliente</p>
                        <p>9:00 - 22:00</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}