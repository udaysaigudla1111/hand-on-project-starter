




const Api = require("../models/Api");






const apis = {
    //GET get all APIs
    getAllAPIs: function(req,res){
        Api.find({}).then((data) => { 
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || 'Error occcured while retrieving APIs. '
            });
        });
    },

    //GET APIs of a particular user
    getAPIsByUserID: function(req, res) {
        const userId = req.params.author;
       Api.find({author:userId}).then((data) => {
        if (!data)
        res.status(404).send({
            message: "api with id " + author + " is not found."
        });
    else res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Error occured while retrieving api with id " + id
    })
})
       
    },
    //POST add new API
    addAPI: function (req,res) {
    
        if(!req.body.name) {
            res.status(400).send({
                message:'API name can not be empty!',
            });
            return; 
        }
        console.log(req.body.author)
        const api = new Api({
            name:req.body.name,
            endpoints:req.body.endpoints,
            description:req.body.description,
            author:req.body.author,
           // imageUrl : req.body.imageUrl
        });
        api.save().then(data => {
            res.status(200).send(data);
            console.log(data)
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred while creating the api."
            });
        })
        
    },
    // PUT update API by id
    updateAPI : function (req,res) {
        if(!req.body) {
            return res.status(400).send({ message: 'Data to update can not be empty!', });
        }
        const id = req.params.id;
        Api.findByIdAndUpdate(id,req.body, { useFindAndModify: false, })
        .then((data) => { 
            if(!data){
                res.status(404).send({ message: `Failed to update API with id = ${id}.`,}); 
        } else 
        res.send({ message: 'API was updated successfully.'});
    })
    .catch((err) => {
        res.status(500).send({
            message:"Error occured while updating API with id =" + id,
        });
    });
    
    },
    //DELETE delete API by id
    deleteAPI : function (req,res) {
        const id = req.params.id;
        Api.deleteOne({ _id: id, })
        .then((data) => {
            if(!data) {
                res.status(404).send({
                    message: `Failed to delete API with id=${id}.`,
                });
            } else
            res.send({ message: 'API was deleted successfully.', })
        }).catch((err) => {
            res.status(500).send({
                message:'Error occurred while deleting API with id=' + id,
            });
        });
    },
    //DELETE remove all APIs
    deletedAllAPIs: function (req,res) {
        APi.deleteMany({}).then((data) => { res.send({ message: 'All APIs was deleted successfully.', });
    }).catch((err) => {
        res.status(500).send({ message:'Error occurred while deleting all APIs', });
    });
    },
};
module.exports = apis;