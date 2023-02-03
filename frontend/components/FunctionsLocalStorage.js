import ProductCartDetail from "./ProductCartDetail";


export async function addProduct() {

    localStorage.setItem('shoppingCart', JSON.stringify(ProductCartDetail));

}
