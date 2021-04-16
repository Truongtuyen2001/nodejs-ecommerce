import Homepage from './pages/Homepage.js';
import ProductDetail from './pages/ProductDetail.js';
import ProductsPage from './pages/ProductsPage.js';
import { parseRequestUrl, $ } from './utils.js';
import Header from './components/Header.js'
import CategoryAPI from './api/categoryAPI.js';
import CategoryPage from './pages/CategoryPage.js';
import ProductAddPage from './pages/ProductAddPage.js';
import AdminProductPage from './pages/AdminProductPage.js';
import Error404Page from './pages/Error404Page.js';
import ProductEditPage from './pages/ProductEditPage.js';
import contact from './pages/contact.js';
import news from './pages/news.js';
import news1 from './pages/news1.js'
import login from './pages/login.js';
import logout from './pages/logout.js';



const routes = {
    '/': Homepage,
    '/products': ProductsPage,
    '/products/:id': ProductDetail,
    '/category/:id': CategoryPage,
    '/addproducts': ProductAddPage,
    '/listproduct': AdminProductPage,
    '/editproduct/:id':ProductEditPage,
    '/contact' : contact,
    '/news' : news,
    '/news1' : news1,
    '/login' : login,
    '/logout':logout,

}

const router = async () => {
    const { resource, id } = parseRequestUrl();
    const parseUrl = (resource ? `/${resource}` : '/') +
        (id ? `/:id` : '')

    console.log(parseUrl);
    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    $('#header').innerHTML = await Header.render();
    $("#main-content").innerHTML = await page.render();
    await page.afterRender();
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);