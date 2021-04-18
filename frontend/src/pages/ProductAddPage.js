import { $ } from './../utils.js';
import { uploadFile } from './../helpers/firebase.js';
import ProductAPI from './../api/productAPI.js';
import CategoryAPI from './../api/categoryAPI.js';

const ProductAddPage = {
    async render() {
        const { data: categories } = await CategoryAPI.getAll();

        return /*html*/`
              <form class="container" id="btn_submit">
                  <input type="text" placeholder="Tên sản phẩm" id="product-name"class="form-control"/>
                  <p class = "my-2 text-left text-red-600 text-sm errorName"></p>
                  <input type="text" placeholder="giá" id="product-price"class="form-control"/>
                  <p class = "my-2 text-left text-red-600 text-sm errorPrice"></p>
                  <select id = "product-categories"class="form-control"><br>
                  ${categories.categories.map(item => {
            return `<option value = "${item._id}">${item.name}</option>`
        }
        )}
                  </select>
                  <input type = 'file' id="image" class="form-control my-3 file"  />
                  <p class = "my-2 text-left text-red-600 text-sm errorFile"></p>
                  <input type="submit" class = "bg-blue-500 p-2 px-4 rounded text-red hover:bg-blue-600 transition cursor-pointer" >
              </form>
          `
    },
    async afterRender() {
        $('#btn_submit').addEventListener('submit', async (e) => {
            e.preventDefault();
            const product = {
                name: $('#product-name').value,
                photo: $('#image').files[0],
                price: $('#product-price').value,
                categoryId: $('#product-categories').value
                // image: $('#image').value,

            };
            const formData = new FormData();
            formData.append('name', $('#product-name').value);
            formData.append('photo', $('#image').files[0]);
            formData.append('price', $('#product-price').value);
            formData.append('category', $('#product-categories').value);
            formData.append('description', $('#product-categories').value);
            // console.log(product);
            await ProductAPI.add(formData);
            window.location.hash = '/';
        })
    }
}
export default ProductAddPage;