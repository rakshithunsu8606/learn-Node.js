const multer = require("multer");
const path = require("path")
const fs = require("fs")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("multerfile", file);

        const filepath = path.join("public", "images", file.fieldname)

        fs.mkdir(filepath, { recursive: true }, (err) => {
            console.log(err);

        })
        cb(null, filepath)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '_' + file.originalname)
    }
})

const upload = multer({ storage: storage })

module.exports = upload



