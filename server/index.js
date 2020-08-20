// 1. REQUIRE dotenv at top-
require('dotenv').config()
        // Instead of requiring it as a variable, we si

// 2. Require other nece- 
const express = require("express") 
    // Express - Handles 
const massive = require("massive") 
    // Massive - Handles our connection to Heroku-Database

//3. Starting initial build of basic Server:

    //A. - Assign a variable 'app' that equals express():
const app = express()
        // A package that

app.use(express.json())
// B. - this is a built-in method contained in the express package function exported by the express module to parse our JSON and turn it into Javascript: (Express turns DB into JS (javascript))
    // We're saying with this package - everytime a request comes in, we want it to run through this package.

app.listen(3993, () => console.log(`Hey Hey, Your Port, Works Today ${3993}`))
    // When we invoke listen, we are passing in mult. arguments:
        //  - 


// Controllers Set-up: 
    // - Going to use redux to to send the express 


