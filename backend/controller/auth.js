import User from '../models/user';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';

// đăng kí
export const singup = (req, res) => {
    const user = new User(req.body);// nhận thông tin người dùng nhập vào
    user.save((error, user) => {
        if (error) {
            return res.status(400).json({
                error: " Không thể đăng kí tài khoản"
            })
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({ user })
    })
}

// đăng nhập
export const singin = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }, (error, user) => {//
        if (error || !user) {
            return res.status(400).json({
                error: 'Người dùng có email đó không tồn tại. Vui lòng đăng ký'
            })
        }
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email và mật khẩu không khớp'
            })
        }
        //tạo mã token
        const token = jwt.sign({ _id: user._id }, "uibibbp");
        //duy trì mã cookie trong token
        res.cookie('t', token, { expire: new Date() + 9999 });
        
        const { _id, name, email, role } = user;
        return res.json(
            {
                token, user: { _id, email, name, role }
            }
        )
    })
};

// đăng xuất
export const singout = (req, res) => {
    res.clearCookie('t');//xoá token
    res.json({
        message: "Đăng xuất thành công"
    })
}

export const requireSignin = expressJwt({
    secret: "uibibbp",
    algorithms: ["HS256"], // em tìm hiểu thêm còn có SHA256
    userProperty: "auth",
});
export const isAuth = (req, res, next) => {
    // console.log(req.profile._id);
    let user = req.profile && req.profile._id == req.auth._id;
    // console.log(user);
    if (!user) {
        return res.status(403).json({
            error: "Access Denied"
        })
    }
    next();
}
export const isAdmin = (req, res, next) => {
    if (req.profile.role == 0) {
        return res.status(403).json({
            error: "Admin resource! Access Denined"
        })
    }
    next();
}

