const multer = require('multer')

var multerstorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null,'public/images')
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + file.originalname)
    }
});

const multerFilter = (req, file, cb) => {
  console.log(file.mimetype,"file.mimetype")
  console.log(file.mimetype.split("/")[1],"file.mimetype.split("/")[1]")
    let fileextion=["png","jpg","jpeg","svg"];
    if (fileextion.includes(file.mimetype.split("/")[1])){ 
      cb(null, true);
    } else {
      cb(new Error("Not a valid File!!"), false);
    }
  };

let upload = multer({
    storage: multerstorage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter : multerFilter,
})

module.exports = upload;