const multer = require("multer");
const path = require("path")
const fs = require("fs")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("multerfile", file);

        const filepath = path.join("public", "images", file.fieldname)

        console.log(filepath);

        fs.mkdir(filepath, { recursive: true }, (err) => {
            console.log(err);
        })
        cb(null, filepath)
        // cb(null,'/tmp')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '_' + file.originalname)
    }
})

const upload = multer({ storage: storage })

// console.log("upload",upload);


module.exports = upload

// const uploadvideo = multer({
//     storage: storage,
//     limits: { fileSize: 500 * 1024 * 1024 }, // 500MB limit
//     fileFilter: (req, file, cb) => {
//         if (
//             file.mimetype.startsWith('video/') ||
//             file.mimetype === 'application/octet-stream'
//         ) {
//             cb(null, true);
//         } else {
//             cb(new Error('Not a video file. Please upload only videos.'));
//         }
//     },
// });



