import ProductAPI from './../api/productAPI.js';
import { $, reRender } from './../utils.js';

const ListProduct = {
  async render() {
    const { data: products } = await ProductAPI.getAll();
    console.log(products);
    const res = (products.data).map((product, index) => {
      return `
                        <tr>
                        <td>${index}</td>
                        <td>${product.name}</td>                  
                        <td><img src="http://localhost:4000/api/product/photo/${product._id}"width="100"</td>
                        <td>${product.price}</td>
                        <td>
                            <a href="/#/editproduct/${product._id}" class="btn btn-primary">Sửa</a>
                            <a href="#/addproducts"><button class="btn btn-primary">Thêm</button></a>
                            <button data-id = "${product._id}" class="btn btn-danger btn-remove">Xoá</button>
                           
                        </td>
                      
                      </tr>`
    }).join("");
    // console.log('ok');
    return `
         <table class="table table-striped table-sm">
         <thead>
           <tr>
             <th>#</th>
             <th>Name</th>
             <th>Image</th>
             <th>Price</th>
             <th width="200px">Action</th>
           </tr>
         </thead>
         <tbody>
            ${res}
         </tbody>
       </table>
         `
  },
  async afterRender() {
    const btns = $('#list-products .btn');
    btns.forEach(btn => {
      const id = btn.dataset.id;
      if (btn.classList.contains('btn-remove')) {
        btn.addEventListener('click', async function () {
          const question = confirm('Ban co chac chan muon xoa khong');
          if (question) {
            await ProductAPI.remove(id);
            await reRender(ListProduct, '#list-products');
          }

        })
      }
    })
  }
}
export default ListProduct