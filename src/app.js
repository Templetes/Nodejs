const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(morgan('combined'))
// short, combined

const commonGet = require('./api/common/get')
const commonPost = require('./api/common/post')
app.use(commonGet)
app.use(commonPost)

app.get("/", (req, res) => {
    res.send(`Server running on port:${port}`)
})

app.use(function (error, req, res, next) {
    console.log("Error: ", error)
    res.status(500).json(error)
  })

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
