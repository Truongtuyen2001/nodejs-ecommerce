import ProductAPI from '../api/productAPI';

const ProductsPage = {
  async render() {
    try {
      const { data: products } = await ProductAPI.getAll();
      const result = products.data.map(product => {

        return `
        <div id="table" class="grid justify-items-center col-3 py-10" style="padding:5px">
        <div class="card" style=" text-align:center; padding:5px; width: 280px;">
        <div class="text-center px-10">
            <img src="http://localhost:4000/api/product/photo/${product._id}" width="200px" height="200px"  >
            </div>   
            <div class="card-body" style="line-height: 50px;">
            <h5 class="card-title" style=" font-weight: bold;font-size: 16px; margin: 30px 0;" >${product.name}</h5>
            <p style="font-weight: bold;color: #eb1f27;font-size: 18px;" class="card-text">${product.price}</p>
            <a href="/#/products/${product._id}" class="btn btn-warning">Xem thêm</a>
            </div>
        </div>
    </div>
       
         `
      }).join("");
      return `
           <div class="container">
           <h2 class="font-weight text-yellow-500 text-3xl text-center"> Sản phẩm mới nhất </h2>
           
           <div class="row">
           ${result}
         </div></div> 
             `
    } catch (error) {
      console.log(error);
    }
  },
  afterRender() { }
}
export default ProductsPage;
