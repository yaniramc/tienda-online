import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function ProductCardDetail({product}) {

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h1>{product.name}</h1>
                        <img src={product.image} alt="image-product" width={500} height={350}/>
                        <p>{product.description}</p>

                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h1>{product.price}</h1>
                        <p>{product.stock}</p>
                        <Link href="/pageShoppingCart" className="btn btn-warning text-white">Añadir a la cesta</Link>
                    </div>
                </div>
            </div>

        </>
    );
};
