const express = require('express')
const router = express.Router()
// const models = require("../../models")

router.get('/api/common/get', (req, res, next) => {
    (async () => {
        try {
            res.json({
                method: 'GET',
                result: true
            })
        } catch (err) {
            next(err)
        }
    })()
})


router.get('/api/common/get/param/:optional?', (req, res, next) => {
    (async () => {
        try {
            const param = req.params.optional
            res.json({
                method: 'GET',
                data: {
                    param: param ?? 'nil',
                },
                result: true
            })
        } catch (err) {
            next(err)
        }
    })()
})


module.exports = router