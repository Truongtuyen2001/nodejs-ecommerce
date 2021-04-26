import { parseRequestUrl } from "../utils";
import ProductAPI from "../api/productAPI";
import CategoryAPI from "../api/categoryAPI";

const CategoryPage = {
    async render() {
        const { id } = parseRequestUrl();
        console.log(id);
        const { data: products } = await ProductAPI.getProductByCateID(id);
        const { data: category } = await CategoryAPI.getAll();
        console.log(category);
        console.log(products);
        const result = (category.categories).filter(categories => categories._id == id).map(cate => {
            return `${cate.name}`
        }).join("")


        return /*html*/`             
               <div class="container">
               <h2 class="container text-center my-4">${result}</h2>
               <div class=" row row-cols-4 gap-2 justify-items-center " >
                    ${products.data.map(item => {
            return /*html */ `
                        <div class="" style="padding: 10px">
                        <div class="card text-center w-auto "style ="">
                            <div class="px-10" >
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