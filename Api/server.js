const express = require('express')
const applicationRouter = require('./routes/applicationRouter')
const userRouter = require('./routes/userRouter')
const app = express();
const cors = require('cors');
const port = 4000;
var bodyParser = require('body-parser');


app.use(cors({
    origin: '*'
}));

app.use(cors({
    methods: ['GET','POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.use('/static',express.static('static/'));

app.get('/', (req, res)=>{
    res.send('welcome to LDAP API')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/applications', applicationRouter)
app.use('/api/v1/users', userRouter)

app.listen(port, () => console.log(`app listening on port ${port}`)); 