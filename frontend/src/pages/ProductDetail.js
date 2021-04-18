
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
                     <div class="row align-items-center">
                         <div class="col-7">
                             <div class="product-slider-single normal-slider">
                                 <img src="http://localhost:4000/api/product/photo/${product._id}" alt="Product Image"width="400px"height="330px">
                                
                             </div>
                             
                         </div>
                         <div class="col-5">
                             <div class="product-content">
                                 <div class="title ">
                                     <h2> ${product.name}</h2>
                                 </div>
                               
                                 <div class="price">
                                     <span>Price: ${product.price} <b>VNĐ</b></span>
                                      
                                 </div>
                                
                                 <div class="size">
                                     <div class="text-3xl">Size:</h4>
                                     <div class="btn-group btn-group-sm">
                                         <button type="button" class="fs-5 text-dark btn btn-outline-warning">S</button>
                                         <button type="button" class="fs-5 text-dark btn btn-outline-warning">M</button>
                                         <button type="button" class="fs-5 text-dark btn btn-outline-warning">L</button>
                                         <button type="button" class="fs-5 text-dark btn btn-outline-warning">XL</button>
                                     </div>
                                 </div> 


                                 <div class="color">
                                     <div class="text-3xl">Color:</div>
                                     <div class="btn-group btn-group-sm">
                                         <button type="button" class="btn">White</button>
                                         <button type="button" class="btn">Black</button>
                                         <button type="button" class="btn">Blue</button>
                                     </div>
                                     
                                 </div>
                      
 
                                 <div class="product-details__btn">
                                 <a class="add" href="#">
                                  
                                   ADD TO CART</a>
                                 <a class="buy" href="#">
                                  
                                   BUY NOW
                                 </a>
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