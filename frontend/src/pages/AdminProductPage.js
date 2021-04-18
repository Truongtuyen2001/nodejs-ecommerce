import ListProduct from '../components/ListProduct.js';
import SidebarMenu from '../components/SidebarMenu.js';

const AdminProductPage = {
  async render() {
    return /*html*/`
         
   
       <div class="container">
         <div class="row">
           <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            ${SidebarMenu.render()}                               
           </nav>
           <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
             <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
               <h1 class="h2">Quản trị viên</h1>
             </div>
             <div class="table-responsive" id="list-products">
                 ${await ListProduct.render()}
             </div>
           </main>
         </div>
       </div>        
         `
  },
  async afterRender() {
    return `${await ListProduct.afterRender()}`
  }
}
export default AdminProductPage;