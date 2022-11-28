const exp = require('express')
const schema = require('../Schema/schema')
const routes = exp.Router()
const route = exp.Router()
const details = require('../Schema/schema')




routes.get('/', async (req, res) =>{
    const data = await details.find()
    res.send(data)
})

// routes.get('/abc', (req, res) =>{
//     res.send(" Hello I Am Manish Patidar.")
// })

routes.post('/', async(req, res) =>{
    const val = await details.find({groceryItem: req.body.groceryItem})
    if(val.length>0){
        res.send("groceryItem already added")
    }
    else{
        const data = await details.create(req.body)
        res.send(data)
    }
})

routes.put('/:name', async (req,res) => {
    //data = req.body.name
    const data = await details.findOneAndUpdate({groceryItem : req.params.name}, {isPurchased : req.body.isPurchased})
    res.send(data)
})


routes.delete('/:name', async (req,res) => {
    const data = await details.findOneAndRemove ({groceryItem:req.params.name})
    res.send(data)

//    let val = data.filter((el)=> {return el.name!= req.params.name})
//    console.log("myLove", req.params.name)
//    data = val
//    res.send(data)
})

module.exports = routes; 