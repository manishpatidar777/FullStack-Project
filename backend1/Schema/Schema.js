const mongoose = require('mongoose');
const nodeSchema = mongoose.Schema(
    {
        groceryItem: {
            require : true,
            type : String
        },
        isPurchased: {
            require : true,
            type : String
        }
    }
)
module.exports = mongoose.model('user', nodeSchema)