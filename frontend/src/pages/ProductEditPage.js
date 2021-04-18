import ProductAPI from '../api/productAPI';
import CategoryAPI from '../api/categoryAPI';
import { parseRequestUrl, $ } from '../utils';
import { uploadFile } from './../helpers/firebase.js';

const ProductEditPage = {
  async render() {
    const { id } = parseRequestUrl();
    console.log(id);
    const { data: product } = await ProductAPI.get(id);
    const { data: category } = await CategoryAPI.getAll();
    const { data: cateName } = await ProductAPI.cateName(id);
    // console.log(cateName.data[0].name)
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
    <select id="cate">
      <option value="${product.category}">${cateName.data[0].name}</option>
      ${(category.categories).map(cate => {
      return /*html */ `
          <option value="${cate._id}">${cate.name}</option>
        `
    }).join("")}
    
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

    $('#form-update-product').addEventListener('submit', async (e) => {
      e.preventDefault();
      const { id } = parseRequestUrl();
      const data = new FormData();
      data.append('name', $('#product-name').value);
      data.append('photo', $('#product-image').files[0]);
      data.append('category', $('#cate').value);
      data.append('price', $('#product-price').value);
      // data.append('category', $('#product-categories').value);
      data.append('description', $('#product-categories').value);
      await ProductAPI.update(id, data);
      // window.location.hash = "/listproduct"
      // console.log('alo');
      // window.location.hash = '/';
    })
  }
};
export default ProductEditPage;
