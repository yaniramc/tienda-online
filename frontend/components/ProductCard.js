import Link from "next/link";

export default function ProductCard({product}) {

    return (
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
            <div className="card h-100 shadow-lg" style={{width:'auto'}}>
                <img src={product.image} className="card-img-top" alt={product.name} height={270}/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <Link href={'#'} className="btn btn text-white">Ver Producto</Link>
                </div>
            </div>
        </div>
    );
}
