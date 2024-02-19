var express = require('express')
var router = express.Router();
var all_products = []

router.get('/', function (req, res, next) {
    try {
        res.send({
            message: 'success',
            result: all_products
        })
    } catch (e) {
        console.log(e)
        res.status(500).send({ message: 'fail' })
    }
});

router.get('/:id', function (req, res, next) {
    try {
        let id = req.params.id
        if (all_products[id]) {
            res.send({
                message: 'success',
                result: all_products[id]
            })
        } else {
            res.status(400).send({
                message: 'fail',
                result: 'id or index not found'
            })
        }
    } catch (e) {
        console.log(e)
        res.status(500).send({ message: 'fail' })
    }
});

router.post('/', function (req, res, next) {
    try {
        let body = req.body
        if (body && body.product_name) {
            all_products.push(body)
            res.send({
                message: 'success',
                result: all_products
            })
        } else {
            res.status(400).send({
                message: 'fail',
                result: 'product_name is require'
            })
        }
    } catch (e) {
        console.log(e)
        res.status(500).send({ message: 'fail' })
    }
});

router.put('/:id', function (req, res, next) {
    try{
        let body = req.body
        let id = req.params.id
        if(all_products[id]){
            if(body&&body.product_name){
                all_products[id] = body
                res.send({
                    message : 'success',
                    result: all_products
                })
            }else {
                res.status(400).send({
                    message:'fail',
                    result:'product_name is require'
                })
            }
        }else{
            res.status(400).send({
                messqge:'fail',
                result:'id or index not found'
            })
        }
    }catch (e) {
        console.log(e)
        res.status(500).send({ message: 'fail' })
    }
});

router.delete('/:id', function (req, res, next) {
    try{
        let id = req.params.id
        if(all_products[id]){
            all_products.splice(id,1)
            res.send({
                message:'seccess',
                result: all_products
            })
        }else{
            res.status(400).send({
                message:'fail',
                result:'id or index not found'
            })
        }
    }catch (e) {
        console.log(e)
        res.status(500).send({ message: 'fail' })
    }
});

module.exports = router;