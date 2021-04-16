import { axiosClient } from './axiosClient';

const CategoryAPI = {
    getAll() {
        const url = `/categories`;
        return axiosClient.get(url);
    },
    getId(id) {
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    add() {
        const url = `/categories/${id}`;
        return axiosClient.post(url, product);
    },
    remove(id) {

    },
    update(id) {

    }

}
export default CategoryAPI;