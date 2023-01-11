import Link from "next/link";

export default function ProductCard({product}) {

    return (
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
            <div className="card h-100 shadow-lg" style={{width:'auto'}}>
                <img src={product.image} className="card-img-top" alt={product.name} height={270}/>
                <div className="card-body">
                    <h5 className="card-title text-uppercase">{product.name}</h5>
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="card-title text-success">Stock: {product.stock}</p>
                        </div>
                        <div className="col-sm-6 d-flex justify-content-end px-4">
                            <h4 className="card-title text-danger">{product.price}€</h4>
                        </div>
                    </div>
                    <p className="card-text">{product.description}</p>
                    <Link href={{pathname: '../pageDetail/[id]', query: {id: product.id}}} className="btn generic-button text-white">Ver en detalle</Link>
                </div>
            </div>
        </div>
    );
}
