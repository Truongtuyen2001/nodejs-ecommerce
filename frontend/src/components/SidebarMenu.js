const SidebarMenu = {
    render(){
       return /*html*/`  
       <div class="sidebar-sticky bg-black">

       <ul class="nav flex-column">

         <li class="nav-item">
           <a class="nav-link active" href="#">
             <span data-feather="home"></span>
             Danh mục <span class="sr-only">(current)</span>
           </a>
         </li>

         <li class="nav-item">
           <a class="nav-link" href="#">
             <span data-feather="file"></span>
             Sản phẩm
           </a>
         </li>

        </ul>
            </div>
         `
    }
}
export default SidebarMenu;