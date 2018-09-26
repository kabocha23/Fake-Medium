const express = require("express");
const routes = require('./routes/');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cloudinary = require('cloudinary');

const app = express();
const router = express.Router();
const dotenv = require('dotenv')

const articleController = require('./controllers/article_controller');

const result = dotenv.config({path:'../.env'});
if(result.error) {
  console.log(result.error);
}

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true },
  (err) => {
    if(err) {
      console.log('Database Error', err);
    }
    console.log('Connected to database');
  }
);

/* configure cloudinary */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

let port = 5000 || process.env.PORT;

/* set up routes, endpoints */
routes(router)

/* set up middleware */
app.use(cors());
app.use(bodyParser.json());
/* Protects our API, preventing attacks. */
app.use(helmet());
/* app.use('/static',express.static(path.join(__dirname,'static'))) */

app.use('/api', router);

/* start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});