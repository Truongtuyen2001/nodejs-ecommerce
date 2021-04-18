import CategoryAPI from "../api/categoryAPI";
import AuthApi from "../api/accountAPI.js"
import { $, reRender } from "../utils"
const Header = {
  async render() {
    const { data: categories } = await CategoryAPI.getAll();


    if (sessionStorage.length > 0) {
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        var user = `${sessionStorage.getItem('user')}`;
        var auth = JSON.parse(user)
        // console.log(auth.user._id)

        var Logout = /*html*/`
              <button class="btn btn-danger" id="btnLogout" >ĐĂNG XUẤT</button>
          `;
      }
      // <li class="mx-2 lg:mx-5 hidden lg:inline "><a href="/#/products">SẢN PHẨM</a></li>
      var auth = JSON.parse(user)

      if (auth.user.role == 1) {
        var admin = /*html*/`
        <li><a href="/#/listproduct" class="nav-link px-2 link-dark fs-5 text">Quản trị</a></li>
                  `
      } else {
        var admin = "";
      }
    } else {
      var admin = "";

      var Logout = /*html*/`
        <a href="/#/singup" type="button" class="btn btn-success me-2">Đăng kí</a>
        <a href="/#/singin" type="button" class="btn btn-danger">Đăng nhập</a>
                        `;
    }
    // console.log(categories);
    return /*html*/`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
           
          
        </head>
        <body>  
      <div class=" bg-info">
              <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
              <a href="/" class=" m-auto d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img src="image/8173724_logo.jpg"width="120px">
              </a>
              <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2 link-dark fs-5 text">Trang chủ</a></li>
                <li><a href="/#/products" class="nav-link px-2 link-dark fs-5 text">Sản phẩm</a></li>
                ${admin}
                <li class="nav-item dropdown ">
                          <a class="nav-link px-2 link-dark fs-5 text" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Danh mục
                          </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            ${categories.categories.map((e) => {
      return /*html*/ `
                                <li><a class="dropdown-item" href="/#/category/${e._id}">${e.name}</a></li>
                          
                                `
    }).join("")}
                          </ul>
                        </li>
                <li><a href="/#/news" class="nav-link px-2 link-dark fs-5 text">Tin tức </a></li>
                <li><a href="/#/contact" class="nav-link px-2 link-dark fs-5 text">Liên hệ </a></li>
              </ul>
              <div class="col-md-3 text-end mx-auto">
              ${Logout}
             </div>
              
            </header>
      </div>
        </body>
        </html> 
        
        `

  },
  async afterRender() {
    const btn = $("#btnLogout");
    if (btn != "") {
      $("#btnLogout").addEventListener("click", async () => {
        sessionStorage.clear();
        await AuthApi.signout();
        window.location.hash = "/";
      })
    }
  },
}
export default Header;