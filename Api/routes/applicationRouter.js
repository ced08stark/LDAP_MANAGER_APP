
const {Router} = require('express');
const applicationControllers = require('../controllers/applicationController');
const router = Router();
const pool = require('../db');
const query = require('../queries/applicationQueries')
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, cb){n
        cb(null, 'static/images/');
    },
    filename: function(req, file, cb){
        cb(null, `${file.originalname}_${Date.now()}`);
    },
});

const fileFilter = (req, file, cb) =>{
    //rejet a file
    if(file.mimetype === 'image/jepg' || file.mimetype === 'image/png'){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
    

}

const upload = multer({storage: storage, limits: {
    fieldSize: 1024 * 1024 * 5
},
fileFilter: fileFilter
});


router.get('/', applicationControllers.getAllApplications);
router.get('/:id', applicationControllers.getApplicationById);
router.delete('/:id', applicationControllers.removeApplication);
router.patch('/:id', applicationControllers.updateApplication);
router.post('/',  applicationControllers.ajoutApplication);

/*router.post('/', upload.single('image'), (req, res, next)=>{
    console.log(req.file)
    const {name, description, image, status, apikey, apisecret} = req.body;
    
    //add application
    pool.query(query.addApplication, [name, description, req.file.path, status, apikey, apisecret], (error, result)=>{
        if(error) throw error;
        res.status(201).send("student created successfully");
})
*/




module.exports = router;