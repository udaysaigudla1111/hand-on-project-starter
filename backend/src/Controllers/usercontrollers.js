






const multer = require('multer')
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const multerConfig = multer.diskStorage({
    destination: (req, file, callback ) => {
        callback(null, 'public/');
    },
    filename: (req, file, callback) => {
        const ext = file.mimetype.split('/')[1];
        callback(null, `image-${Date.now()}.${ext}`);
    }

});

const isImage  = (req, file, callback) => {
    if(file.mimetype.startsWith('image')) {
        callback(null, true);
    } else {
        callback(new Error('Only Image is Allowed..'));
    }
}

const upload = multer({
    storage: multerConfig,
    fileFilter:isImage,
})

exports.uploadImage = upload.single('photo')
exports.upload = (req,res) => {
    console.log(req.file)
    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_file',fs.createReadStream(req.file.path), path.basename(req.file.path));
    
    axios({
      method: 'post',
      url: 'https://api.remove.bg/v1.0/removebg',
      data: formData,
      responseType: 'arraybuffer',
      headers: {
        ...formData.getHeaders(),
        'X-Api-Key': 'op888Gyt5i2JZ9AYjJFXSa3q',
      },
      encoding: null
    })
    .then((response) => {
      if(response.status != 200) 
      return console.error('Error:', response.status, response.statusText);
      fs.writeFileSync("no-bg.png", response.data);
      res.send(response.data);

    })
    .catch((error) => {
        return console.error('Request failed:', error);
       
    });
};