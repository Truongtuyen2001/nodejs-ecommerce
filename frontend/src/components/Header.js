import CategoryAPI from "../api/categoryAPI";

const Header = {
    async render() {
        const { data: categories } = await CategoryAPI.getAll();
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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
             <img src="image/8173724_logo.jpg"width="120px">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/#/products">Sản phẩm</a>
              </li>
              <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/#/listproduct">Quản trị</a>
            </li>
              <li class="nav-item dropdown">
                <a class="nav-link active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
              <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/#/news">Tin tức</a>
            </li>
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/#/contact">Liên hệ</a>
          </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
  

        </body>

      

       
        
        </html> 
        
        `

    }
}
export default Header;