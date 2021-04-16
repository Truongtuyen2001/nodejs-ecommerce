const contact = {
  async render() {
   
    return /*html */ `
    <h1 class="text-center text-3xl ">Liên hệ tới Smartmen</h1>
    <div class="container">

          <div id="main" class="col-lg-12 col-md-12 col-sm-12">
             
              <div class="row">
                  <div class="col-lg-12 col-sm-12 col-md-12">
                      <div class="row">
                          <div class="col-lg-6">
                              <h5 class="mb-3">Shop giày uy tín Smartmen</h5>
                              <p>Với sự đa dạng về mẫu mã và phong cách, chất lượng luôn đặt lên hàng đầu, 
                              cùng với đó là giá cả phải chăng, thương hiệu Giày 
                              Cao Smartmen ngày càng được nhiều quý khách hàng ưu tiên sử dụng.
                               Điểm nhấn ấn tượng mà các sản phẩm giày của Smartmen được khách hàng đánh giá cao đó chính là sử dụng công nghệ đế kép, 
                               giúp tăng 5cm chiều cao mà không lộ dáng hay đau chân khi di chuyển</p>
                              <p>Địa chỉ: Lê Đức Thọ, Nam Từ Liêm, Hà Nội</p>
                              <p>Điện thoại: 0973 321 745</p>
                              <p>Email:tuyentdph11808@gmail.com</p>
                              <hr>
                              <h5 class="mb-3 mt-4">Shop giày cao cấp Smartmen</h5>
                              <p>
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.2726235383593!2d105.76526454353443!3d21.032291570343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455986c2f2263%3A0x600178f26a953e20!2sKtx!5e0!3m2!1svi!2s!4v1599876934315!5m2!1svi!2s" 
                              width="100%" height="230px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                              </p>
                          </div>

                          <div class="col-md-6">
                              <h5 class="mt-2 mb-2">Ý kiến góp ý của quý vị</h5>
                              <p>Mọi ý kiến đóng góp, liên hệ, khiếu nại khác vui lòng điền đầy đủ thông tin và gửi đến chúng tôi. Bộ phận hỗ trợ khách hàng sẽ phản hồi sớm nhất khi nhận được thông tin.</p>
                              <form id="contact" method="post" action="gui-gop-y.php" style="border: 1px solid #ccc; border-radius: 4px; padding: 14px 30px;">
                                  <div class="form-group">
                                      <label for="my-input">Họ và tên: </label>
                                      <input id="full_name" class="form-control" type="text" name="full_name">
                                      <span class="form-message"></span>
                                  </div>
                                  <br>
                                  <div class="form-group">
                                      <label for="my-input">Địa chỉ: </label>
                                      <input id="address" class="form-control" type="text" name="address">
                                      <span class="form-message"></span>
                                  </div>
                                  <br>
                                  <div class="form-group">
                                      <label for="my-input">Số điện thoại: </label>
                                      <input id="phone" class="form-control" type="text" name="phone">
                                      <span class="form-message"></span>
                                  </div>
                                  <br>
                                  <div class="form-group">
                                      <label for="my-input">Email: </label>
                                      <input id="email" class="form-control" type="text" name="email">
                                      <span class="form-message"></span>
                                  </div> 
<br>
                                  <div class="form-group">
                                      <label for="my-textarea">Nội dung: </label>
                                      <textarea id="content" class="form-control" name="content" rows="8"></textarea>
                                      <span class="form-message"></span>
                                  </div>
                                  <br>
                                  <button id="btn" class="btn btn-primary bg-green-399">Gửi tới Smartmen</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>

  
        `
        
  }
}
export default contact;