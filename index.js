const express = require("express");
const colors = require ('colors');
const cors = require ('cors');
const morgan = require('morgan');
const dotenv = require ('dotenv')

dotenv.config()



//rest object
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

//route
// URL => http://localhost:8080
app.get("/", (req, res) => {
    return res.status(200).send ("<h1>Welcome to crave and create!</h1>");
});

//PORT
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`.white.bgMagenta);
});