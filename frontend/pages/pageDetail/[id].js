import Link from "next/link";
import { useRouter } from 'next/router'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCardDetail from "../../components/ProductCardDetail";

export default function ProductDetail({productCardDetail}) {
    // const router = useRouter()
    // const { id } = router.query


    return (
        <>
            <Header></Header>

            <div className="container">
                {productCardDetail.map((productCardDetail, index) => {
                    return (
                    <ProductCardDetail product={productCardDetail} key={index}/>
                    )
                })}
            </div>

            <Footer></Footer>
        </>
    );
}



export async function getServerSideProps(context) {
    const res = await fetch('http://127.0.0.1:8000/tienda/product/');
    const data = await res.json();

    return {
        props: {
            productCardDetail: data.results,
        },
    };
}
