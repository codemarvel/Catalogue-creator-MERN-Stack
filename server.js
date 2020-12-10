let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// Express Route
const studentRoute = require('./routes/product.route')

// Connecting mongoDB Database
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI||dbConfig.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false 
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/products', studentRoute)


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error

if(process.env.NODE_ENV==='production'){}
  app.use(express.static('client/build'));
  const path =require('path');
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client/build/index.html'));
  });





app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});


  
