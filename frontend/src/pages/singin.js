import AccountAPI from '../api/accountAPI.js';
import { $ } from '../utils'
import sessionStorage from '../sessionStorage'

const singin = {
  render() {
    return /*html*/ `
              <form id="singIn" class="flex mx-auto justify-center text-center w-25">
                  <div class="h3 mb-3 font-weight-normal">Đăng nhập</div>
                  <div class="d-grid gap-3">    
                      <label for="inputEmail" class="px-10"></label>
                      <input type="email" id="email" class="form-control" placeholder="Mời bạn nhập email" >

                      <label for="inputPassword" class="sr-only"></label>
                      <input type="password" id="password" class="form-control" placeholder="Mời bạn nhập mật khẩu">
                  </div>
                  <button class="btn btn-lg btn-primary btn-block " type="submit">Đăng nhập</button>
              </form>
      
        `;
  },
  async afterRender() {
    $("#singIn").addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = $("#email");
      const password = $("#password");

      if (email.value === "" || password.value === "") {
        alert("Hãy điền vào mẫu này");
      } else {
        const body = {
          password: $("#password").value,
          email: $("#email").value,
        };
        // console.log(body);

        try {
          const response = await AccountAPI.signin(body);
          sessionStorage.setSession("user", response.data);
          window.location.hash = "/";
        } catch (error) {
          var { data } = error.response;
          // console.log(data.error);
          alert(data.error);
        }
      }
    });
  },
};
export default singin;