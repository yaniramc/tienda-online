
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCardDetail from "../../components/ProductCardDetail";

export default function ProductDetail({productCartDetail}) {

    return (
        <>
            <Header></Header>

            <div className="container">
                <ProductCardDetail product={productCartDetail}/>
            </div>

            <Footer></Footer>
        </>
    );
}



export async function getServerSideProps(context) {
    const id = context.params.id;
    const res = await fetch('http://127.0.0.1:8000/tienda/product/' + id);
    const data = await res.json();

    return {
        props: {
            productCartDetail: data,
        },
    };
}
