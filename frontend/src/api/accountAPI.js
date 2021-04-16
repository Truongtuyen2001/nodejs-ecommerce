import { axiosClient } from './axiosClient';

const AccountAPI = {
    login(email,password) {
        const url = '/accounts?email=tuyen@gmail.com&password=1234567';
        //post : gửi dữ liệu
        //get : lấy dữ liệu 
        //put : sửa dữ liệu
        //delete : xoá dữ liệu
        return axiosClient.get(url)
    }
}

export default AccountAPI;