const express = require('express')
const router = express.Router()
// const models = require("../../models")

router.post('/api/common/post', (req, res, next) => {
    (async () => {
        try {
            const title = req.body.title
            const contents = req.body.contents
            res.json({
                method: 'POST',
                data: {
                    title: title,
                    contents: contents
                },
                result: true
            })
        } catch (err) {
            next(err)
        }
    })()
})

module.exports = router