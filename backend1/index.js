const exp = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = exp()

const bp = require('body-parser')
const rout = require('./routes/routes')
mongoose.connect('mongodb+srv://manish:12345@cluster0.nl8vssp.mongodb.net/nodePro?retryWrites=true')
mongoose.connection.once("open", ()=> {console.log("Connection Complete")} )

app.use(cors("http://localhost:3000/"))
app.use(bp.json(),rout)
app.listen(8001)