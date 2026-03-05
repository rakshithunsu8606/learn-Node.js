const { default: mongoose } = require("mongoose");

const CoursiesSchema = new mongoose.Schema(
    {
        category_id:{
            type:mongoose.Types.ObjectId,
            ref:'categories'
        },
        name: {
            type: String,
            unique: true,
            trim: true
        },
        description: {
            type: String
        },
        price:{
            type:Number
        },
        week:{
            type:Number
        },
        course_img:{
            type:String
        },
        url:{
            type:String
        },
        gst_number:{
            type:String,
            uppercase:true,
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

const Course = mongoose.model('coursies', CoursiesSchema);

module.exports=Course