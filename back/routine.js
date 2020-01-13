const MongoClient = require('mongodb').MongoClient;

let routine = {}
//here we'll call the scraper
routine.init =  () => {
    console.log("routines"); 
}
module.exports = routine; 