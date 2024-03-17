const product = require('../Models/productSchema')

const productcontrol = () => {

    const create = async (req, res) => {
        try {
            const createdata = await product.create({
                Id: req.body.Id,
                Name: req.body.Name,
                Price: req.body.Price,
                Description: req.body.Description,
                Image: `http://localhost:6001/${req.file.filename}`,
            });

            console.log(createdata, "createddata");

            const saveddata = await createdata.save()

            console.log(saveddata, "saveddata");
            res.status(200).json({
                message: "created Successfully",
                data: saveddata
            });
        }
        catch (err) {
            res.status(400).send("Please Provide Valid Data!!!")

        }
    }


    const get = async (req, res) => {
        try {
            var findData = await product.find();
            res.status(200).send({
                data: findData,
                message: "Got Products Successfully!"
            })
        }
        catch (err) {
            console.log("Product not saved!!!")
        }
    }

    // const getproduct = ("/:_id", async (req, res) => {
    //     try {
    //         const data = await product.findById({ _id: req.query._id })
    //         res.json(data)
    //     }
    //     catch (err) {
    //         console.log("Product not getted!!!")
    //     }
    // })

    const update = ( async (req, res) => {
        try {
            // console.log("req.file.filename",req.body)
            // console.log("alllllllllllllllllllllllllll",req.file.filename)
            var file = "false"
            if (file == req.body.a) {
                console.log("freee")
                const updateproduct = await product.updateOne({ _id: req.body.uID },
                    {
                        $set: {
                            Id: req.body.Id,
                            Name: req.body.Name,
                            Price: req.body.Price,
                            Description: req.body.Description,
                            Image: `http://localhost:6001/${req.file.filename}`
                        }
                    })
                console.log(updateproduct, "Updated Product")

const updata = await product.find({ _id: req.body.uID})
     
res.status(200).json({
                    message: "Product Updated Successfully!",
                    data: updata
                })
            }
            else {
                const updateproduct = await product.updateOne({ _id: req.body.uID },
                    {
                        $set: {
                            Id: req.body.Id,
                            Name: req.body.Name,
                            Price: req.body.Price,
                            Description: req.body.Description,
                            // Image: req.file.filename
                        }
                    })
                console.log(updateproduct, "Updated Product")

                res.status(200).json({
                    message: "Product Updated Successfully!",
                    data: updateproduct
                })
            }
        }
        catch (err) {
            console.log(err, "Error!!!")
        }
    })

    const deleted = async (req, res) => {
        try {
            const result = await product.deleteOne({ _id: req.params._id })
            res.status(200).send({
                data: result,
                message: "Product Deleted Successfully!"
            })
        }
        catch (err) {
            console.log("Something went wrong!!!")
        }
    }

    return {
        create,
        get,
        // getproduct,
        update,
        deleted
    }
}

module.exports = productcontrol()