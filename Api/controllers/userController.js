const pool = require('../db');
const query = require('../queries/userQueries');


const getAllUsers = async (req, res, next) =>{
    pool.query(query.getAllUsers, (err, results)=>{
        if(err) throw err;
        res.status(200).json(results.rows);
    })
}

const getUserById = async (req, res, next) =>{
    const id = parseInt(req.params.id);
    pool.query(query.getUserById, [id], (err, results)=>{
        if(err) throw err;
        res.status(200).json(results.rows);
    })
}

const addUser = async (req, res, next) =>{
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();
    let created = `${yyyy}-${mm}-${dd}`;
    const {username, password, picture, createdAt, application_id} = req.body;
    
    //add user
    pool.query(query.addUser, [username, password, picture, created, application_id], (error, result)=>{
        if(error) throw error;
        res.status(201).send("student created successfully");
    })
}

const removeUser = async (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query(query.getUserById, [id], (error, results)=>{
        const noUserFound = !results.rows.length;
        if(noUserFound){
            res.send("User does not exist in the database, could not remove");
        }

        pool.query(query.removeUser, [id], (error, results)=>{
            if(error) throw error;
            res.status(200).send("user remove successfully.")
        })

        
    })
}

const updateUser = async (req, res)=>{
    const id = parseInt(req.params.id);
    const {name} = req.body;

    pool.query(query.getUserById, [id], (error, results)=>{
        const noUserFound = !results.rows.length;
        if(noUserFound){
            res.send("User does not exist in the database, could not remove");
        }

        pool.query(query.updateUser, [name, id], (error, results)=>{
            if(error) throw error;
            res.status(200).send("User update successfully");
        });
    });
}




module.exports = {getAllUsers, getUserById, addUser, removeUser, updateUser}