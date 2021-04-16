import Product from '../models/product';
import formidable from 'formidable';
import fs from "fs";
import _ from 'lodash';
import { body, validationResult } from 'express-validator';

export const create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({
                error: "Thêm sản phẩm thất bại"
            })
        }
        const { name, description, price } = fields;
        if (!name || !description || !price) {
            return res.status(400).json({
                error: "Bạn cần nhập đầy đủ thông tin"
            })
        }
        let product = new Product(fields);
        // let product = req.product;
        //     product = _.assignIn(product, fields);
        if (file.photo) {
            if (file.photo.size > 1024 * 1024) {
                console.log('ok');
                return res.status(400).json({
                    error: "Ban nen up anh duoi 100000"
                })
            }
            product.photo.data = fs.readFileSync(file.photo.path);
            product.photo.contentType = file.photo.path;

        }
        product.save((err, data) => {
            if (err) {
                console.log(err.message);
                return res.status(400).json({
                    error: "Không thêm được sản phấm"
                })
            }
            res.json(data);
        });
    });
}

// export const create = async (req, res) => {

//     const check = validationResult(req);
//     if (check.isEmpty()) {
//         const product = new Product(req.body);
//         product.save((err, data) => {
//             if (err) {
//                 // console.log(err.message)
//                 res.status(400).json({
//                     error: "Khong them duoc san pham"
//                 })
//             }
//             res.json({ data, message: "Add new product ok" });

//         })
//     } else res.json({ error: 'error' })
// }


export const image = (req, res) => {
    if (req.product.photo.data) {
        res.set("Content-Type", "image/png");
        return res.send(req.product.photo.data);
    };
}

export const productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if (err || !product) {
            return res.status(400).json({
                err: "Khong tim thay san pham"
            })
        }
        req.product = product;
        next();
    })
}


export const read = (req, res) => {
    // console.log('okm');
    // console.log(req.product);
    return res.json(req.product);
}


export const remove = (req, res) => {
    let product = req.product;
    product.remove((err, deletedProduct) => {
        if (err) {
            return res.status(400).json({
                error: "Không xoá dc sản phẩm"
            })
        }
        res.json({
            deletedProduct,
            message: "Sản phẩm xoá thành công"
        })
    })
}
//list
export const list = (req, res) => {
    Product.find((err, data) => {
        if (err) {
            error: "Không tìm thấy sản phẩm"
        }
        res.json({ data })
    })
}

export const update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, file) => {
        if (err) {
            return res.status(400).json({
                error: "Sửa sản phẩm thất bại"
            })
        }
        const { name, description, price } = fields;
        if (!name || !description || !price) {
            return res.status(400).json({
                error: "Bạn cần nhập đầy đủ thông tin"
            })
        }
        // let product = new Product(fields);
        let product = req.product;
        product = _.assignIn(product, fields);
        if (file.photo) {
            if (file.photo.size > 100000) {
                res.status(400).json({
                    error: "Ban nen up anh duoi 100000"
                })
            }
            product.photo.data = fs.readFileSync(file.photo.path);
            product.photo.contentType = file.photo.path;

        }
        product.save((err, data) => {
            if (err) {
                res.status(400).json({
                    error: "Không sửa được sản phẩm"
                })
            }
            res.json(data);
        });
    });
}
