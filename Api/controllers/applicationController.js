const pool = require('../db');
const query = require('../queries/applicationQueries')




const getAllApplications = (req, res, next) =>{
    
    pool.query(query.getAllApplication,(err, results)=>{
        if(err) throw err;
        
        res.status(200).json(results.rows);
    })
}

const getApplicationById = (req, res, next) =>{
    const id = parseInt(req.params.id);
    pool.query(query.getApplicationById, [id],(err, results)=>{
        if(err) throw err;
        
        res.status(200).json(results.rows);
    })
}

const ajoutApplication = (req, res, next) =>{
   
    
    const {name, description, image, status, apikey, apisecret} = req.body;
    console.log(req.body.image)
    //add application
    pool.query(query.addApplication, [name, description, image, status, apikey, apisecret], (error, result)=>{
        if(error) throw error;
        res.status(201).send("student created successfully");
    })
}


const removeApplication = async(req, res)=>{
    const id = parseInt(req.params.id);
    pool.query(query.getApplicationById, [id], (error, results)=>{
        const noApplicationFound = !results.rows.length;
        if(noApplicationFound){
            res.send("Application does not exist in the database, could not remove");
        }
        
        pool.query(query.removeApplication, [id], (error, results)=>{
            if(error) throw error;
            res.status(200).send("user remove successfully.")
        })

    })
}


const updateApplication = async(req, res)=>{
    const id = parseInt(req.params.id);
    const status = req.body.status;
    console.log('update...')
    pool.query(query.getApplicationById, [id], (error, results)=>{
        const noApplicationFound = !results.rows.length;
        if(noApplicationFound){
            res.send("Application does not exist in the database, could not update");
        }

        pool.query(query.updateApplication, [status, id], (error, results)=>{
            if(error) throw error;
            res.status(200).send("application update successfully");
        });
    });
}




module.exports = {getAllApplications, getApplicationById, ajoutApplication, removeApplication, updateApplication}