
import { axiosClient } from './axiosClient';

const AccountAPI = {
    signup(account) {
        const url = `/singup`;
        return axiosClient.post(url, account)
    },
    signin(account) {
        const url = `/singin`;
        return axiosClient.post(url, account)
    },
    // signout() {
    //     const url = `/signout`;
    //     return axiosClient.get(url)
    // }
}

export default AccountAPI;