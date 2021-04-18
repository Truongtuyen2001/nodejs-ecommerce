import { $ } from "../utils";
import authAPI from "../api/accountAPI.js";

const singup = {
    render() {
        return /*html*/ `
       
                    <form id="form-singup" class="flex justify-center text-center">
                    <div class="h3 mb-3 font-weight-normal">Đăng kí tài khoản</div>
                           <div class="d-grid gap-3">
                                <div class="form-group gap-5">
                                    <input type="name" name="name" id="name" class="form-control input-lg no-border w-25" placeholder="Tên đăng nhập">
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email" id="email" class="form-control input-lg no-border w-25" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <input type="password" name="password" id="password" class="form-control input-lg no-border w-25" placeholder="Mật khẩu">    
                                </div>
                             </div>
                            <div class="flex justify-center">
                                <div class="">
                                <input class="btn btn-lg btn-primary btn-block" type="submit" value="Đăng kí">
                                </div>
                            </div>

                            <!-- /.social-auth-links -->
                            
                        </div>

                    </div>
                </form>
  
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
            console.log(account);
            authAPI.signup(account);
            alert("Đăng kí thành công");
            window.location.hash = "/singin"
        });
    },

};
export default singup;