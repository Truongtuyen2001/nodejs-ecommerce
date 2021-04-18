import { parseRequestUrl } from "../utils";
import ProductAPI from "../api/productAPI";
import CategoryAPI from "../api/categoryAPI";

const CategoryPage = {
    async render() {
        const { id } = parseRequestUrl();
        console.log(id);
        const { data: products } = await ProductAPI.getProductByCateID(id);
        console.log(products);


        return /*html*/`             
               <div class="container">
               <div class=" row row-cols-4 gap-5 justify-items-center " >
                    ${products.data.map(item => {
            return /*html */ `
                        <div class="" style="padding: 10px">
                        <div class="card text-center" style="height: 400px; text-align:center; padding:5px; width: 360px;">
                            <div class="px-20" >
                                <a href=""> <img src="http://localhost:4000/api/product/photo/${item._id}" width="200px" height="200px" ></a>
                            </div>
                         <div class="card-body" style="line-height: 50px;">
                            <a style="text-decoration: none;  color: #666; font-weight: bold;font-size: 16px; margin: 30px 0;" 
                            href="">${item.name}</a>
                            <p class="card-text" style="font-weight: bold;color: #eb1f27;font-size: 18px;">Giá bán: ${item.price}</p>
                            <a href="/#/products/${item._id}" class="text-center btn btn-primary">Xem thêm</a>
                         </div>                          
                     </div>
                    </div>
                        `
        }).join("")}
               
               </div> 
               </div>
                `

    },

    afterRender() { }
}
export default CategoryPage;

// return 
// <div class="container">
// <h2 class="font-weight text-yellow-500 text-3xl text-center"> </h2>

// <div class="row">

// ${result}
// `
// `