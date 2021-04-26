import { $ } from "../utils";
import authAPI from "../api/accountAPI.js";

const singup = {
    render() {
        return /*html*/ `
                <div class="justify-content-center d-flex  boder my-5">
              
                    <form id="form-singup" class="flex justify-center text-center border px-3 py-4 rounded">
                    <div class="h3 mb-3 font-weight-normal">Đăng kí tài khoản</div>
                           <div class="d-grid gap-3">
                                <div class="form-group gap-5">
                                    <input type="name" name="name" id="name" class="form-control input-lg no-border w-100 " placeholder="Tên đăng nhập">
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email" id="email" class="form-control input-lg no-border " placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <input type="password" name="password" id="password" class="form-control input-lg no-border " placeholder="Mật khẩu">    
                                </div>
                             </div>
                            <div class="flex justify-center gap-5">
                                <div class="">
                                <input class="btn btn-lg btn-primary btn-block w-100 " type="submit" value="Đăng kí">
                                </div>
                            </div> 
                        </div>

                    </div>
                </form>
                </div>
        `;

    },
    afterRender() {
        $("#form-singup").addEventListener('submit', e => {
            e.preventDefault();

            const account = {
                name: $("#name").value,
                email: $("#email").value,
                password: $("#password").value,
            };
            // console.log(account);
            authAPI.signup(account);
            alert("Đăng kí thành công");
            window.location.hash = "/singin"
        });
    },

};
export default singup;