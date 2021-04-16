const logout = {
    render (){
        return /*html*/ `
        <form action="#" method="post" id="frmRegister"class="flex justify-center">
        <!-- /.login-logo -->
        <div class="login-box-body">
            <div class="login-logo" style="display: none;">
                <a href="/"><img src="/upload-usr/images/logo.png" alt="" title="" media-simple="true" style="width: 100%;"></a>
            </div>
            <!--<h2 class="login-box-msg">QUÊN MẬT KHẨU</h2>-->
            <div>
                <div class="form-group">
                    <input type="text" name="username" class="form-control input-lg no-border" placeholder="Tài khoản">
                    <!--<span class="fa fa-user t40 form-control-feedback"></span>-->
                </div>
                <div class="form-group" style="display: none;">
                    <input type="email" name="email" class="form-control input-lg no-border" placeholder="Email">
                    <!--<span class="fa fa-envelope t40 form-control-feedback"></span>-->
                </div>
                <div class="form-group">
                    <input type="tel" name="tel" class="form-control input-lg no-border" placeholder="Số điện thoại">
                    <!--<span class="fa fa-phone t40 form-control-feedback"></span>-->
                </div>
                <div class="form-group">
                    <input type="password" name="password" class="form-control input-lg no-border" placeholder="Mật khẩu">
                    <!--<span class="fa fa-lock t40 form-control-feedback"></span>-->
                </div>
                <div class="form-group">
                    <input type="password" name="repassword" class="form-control input-lg no-border" placeholder="Xác nhận mật khẩu">
                    <!--<span class="fa fa-lock t40 form-control-feedback"></span>-->
                </div>
                <div class="form-group"  style="display: none;">
                    <div class="row">
                        <div class="col-xs-5">
                            <img style="cursor:pointer" class="form-control input-lg no-border" id="imgcaptcha" src="/Home/Captcha?2972" onclick="document.getElementById('imgcaptcha').src = '/Home/Captcha?'+ Math.random(); document.getElementById('captcha').focus();">
                            
                        </div>
                        <div class="col-xs-7">
                            <input type="text" name="captcha" class="form-control input-lg no-border text-center t14" placeholder="Nhập mã xác nhận">
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="">
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Đăng kí tài khoản</button>
                    </div>
                </div>

                <!-- /.social-auth-links -->
               
            </div>

        </div>
    </form>
        


        
        `
    }
}
export default logout;