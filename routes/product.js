const express = require("express");
const router = express.Router()
const productcontrol = require('../Controllers/product')
let upload = require('../multer')

router.post('/create', upload.single("Image"),productcontrol.create)
router.get('/get',productcontrol.get)
// router.get('/getproduct',productcontrol.getproduct)
router.put('/update', upload.single("Image"),productcontrol.update)
router.delete('/deleted/:_id',productcontrol.deleted)

module.exports = router;