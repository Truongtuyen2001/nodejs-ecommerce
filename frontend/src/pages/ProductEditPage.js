import ProductAPI from '../api/productAPI';
import { parseRequestUrl, $ } from '../utils';
import { uploadFile } from './../helpers/firebase.js';

const ProductEditPage = {
  async render() {
    const { id } = parseRequestUrl();
    console.log(id);
    const { data: product } = await ProductAPI.get(id);
    console.log(product);
    return /*html*/`


      <div class="container">
      <form id="form-update-product">
      <div class="mb-3">
        <label for="product-name" class="form-label">Tên sản phẩm</label>
        <input type="text" class="form-control" id="product-name" value="${product.name}" aria-describedby="emailHelp">
        
      </div>
      <div class="mb-3">
      <label for="product-price" class="form-label">Giá sản phẩm</label>
      <input type="text" class="form-control" id="product-price" value="${product.price}" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
    <label for="product-categoryId" class="form-label">Thể loại</label>
    <input type="text" class="form-control" id="product-categoryId" value="${product.categoryId}" aria-describedby="emailHelp">
    
  </div>
  <div class="mb-3">
  <label for="product-image" class="form-label">Ảnh sản phẩm</label>
  <input type="file" class="file" id="product-image" aria-describedby="emailHelp">
</div>
      <button type="submit" class="btn btn-primary">Update</button>
    </form>
      </div>
       `
  },
  async afterRender() {
    // const { id } = parseRequestUrl();
    // const { data: product } = await ProductAPI.get(id);
    // $('#form-update-product').addEventListener('submit', async (e) => {
    //   e.preventDefault();
    //   const file = $('#product-image').files[0];
    //   console.log(file);
    //   if (file !== undefined) {
    //     var url = await uploadFile(file.name, file);
    //   }
    //   const newProduct = {
    //     ...product,
    //     name: $('#product-name').value,
    //     price: $('#product-price').value,
    //     categoryId: $('#product-categoryId').value,
    //     image: file !== undefined ? url : product.image
    //   };
    //   await ProductAPI.update(id, newProduct);
    //   window.location.hash = '/listproduct'
    // })
    // const { data: product } = await ProductAPI.get(id);

    $('form-update-product').addEventListener('submit', async (e) => {
      e.preventDefault();

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
};
export default ProductEditPage;
