import AccountAPI from './../api/accountAPI.js';

const login = {
  render() {
    return /*html*/ `
        <form class="flex justify-center ">
      
      <div>
      <div class="h3 mb-3 font-weight-normal">Đăng nhập</div>
      <label for="inputEmail" class="px-10"></label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Nhập số điện thoại" required autofocus>
      <label for="inputPassword" class="sr-only"></label>
      <input type="password" id="inputPassword" class="form-control" placeholder="mật khẩu" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Lưu mật khẩu
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Đăng nhập</button>
      </div>
        
      </form>
   
        
        `
  }
}
export default login;