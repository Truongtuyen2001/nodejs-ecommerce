
import ProductAPI from '../api/productAPI.js';
import { parseRequestUrl } from './../utils.js';


const ProductDetail = {
    async render() {

        const { id } = parseRequestUrl();
        const { data: product } = await ProductAPI.get(id);

        return /*html*/`
          
        
  
 <div class="product-detail">

     <div class="container">
         <div class="row grid justify-items-center">
             <div class="col-lg-8">
                 <div class="product-detail-top">
                     <div class="row ">
                         <div class="col">
                             <div class="product-slider-single normal-slider">
                                 <img src="http://localhost:4000/api/product/photo/${product._id}" alt="Product Image"width="400px"height="330px">                              
                             </div>
                             
                         </div>
                         <div class="col">
                             <div class="product-content">
                                 <div class="title ">
                                     <h2> ${product.name}</h2>
                                     <span>Chất liệu cao cấp, bền đẹp theo thời gian. Thiết kế thời trang. Kiểu dáng phong cách. Độ bền cao. Dễ phối đồ.</span>
                                 </div>
                               
                                 <div class="price">
                                    <h3 > ${String(product.price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} </h3>  VNĐ
                                 </div>
                                
                                <div class="product-details__btn">
                                    <a class="add" href="#">Thêm vào giỏ hàng</a>
                                    <a class="buy" href="#">Mua ngay</a>
                                </div>

                             </div>
                         </div>
                     </div>
                 </div>
                </div>           
          `
    },
    afterRender() { }
}
export default ProductDetail;