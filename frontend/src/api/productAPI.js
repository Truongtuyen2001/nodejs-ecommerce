import { axiosClient } from './axiosClient';

const ProductAPI = {
    getAll() {
        const url = `/product/`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    add(product) {
        const url = `/product`;
        return axiosClient.post(url, product);
    },
    remove(id) {
        const url = `/product/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        console.log(data)
        const url = `/product/${id}`;
        return axiosClient.put(url, data);
    },
    getProductByCateID(id) {
        const url = `/categoryPage/${id}`;
        return axiosClient.get(url);
    },
    cateName(id){
        const url = `/product/cate/${id}`;
        return axiosClient.get(url);
    },

}
export default ProductAPI;