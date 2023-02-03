import ProductCardDetail from "./ProductCardDetail";


export async function addProduct() {

    localStorage.setItem('shoppingCart', JSON.stringify(ProductCardDetail));

}
