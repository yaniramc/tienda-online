import Link from "next/link";

export default function ProductCardDetail({product}) {

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h1>{product.name}</h1>
                        <img src={product.image} alt="image-product" width={500} height={350} className="my-5"/>
                    </div>
                    <div className="col-sm-12 col-md-6 my-5">
                        <h4 className="pt-5 pb-3">Descripción del producto: {product.description}</h4>
                        <h1 className="text-danger">{product.price} €</h1>
                        <h4 className="text-success pt-2 pb-5">Stock: {product.stock}</h4>
                        <Link href="/pageShoppingCart" className="btn btn-warning btn-lg text-white">Añadir a la cesta</Link>
                    </div>
                </div>
            </div>

        </>
    );
};
