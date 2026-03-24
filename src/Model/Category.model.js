// const { default: mongoose } = require("mongoose");

const { default: mongoose } = require("mongoose");

const CategoriesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        description: {
            type: String
        },
        category_img: {
            public_id:{
                type:String
            },
            url:{
                type:String
            }
        },
        parent_category_id: {
            type: mongoose.Types.ObjectId,
            ref:'categories',
            default:null
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps:true,
        versionKey:false,

    }
)

const Category = mongoose.model('categories', CategoriesSchema);

module.exports=Category