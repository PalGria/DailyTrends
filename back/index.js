const express = require('express');
const morgan = require('morgan');
const app = express();
const cors  = require('cors');
const {MongoClient} = require  ("./database.js")
const schedule = require('node-schedule');
const routines  = require ('./routine.js');
//Settings----
app.set('port', process.env.PORT || 3000);
//Middlewares 
app.use(morgan('dev'));
app.use(express.json());
var allowedOrigins = ['http://localhost:4200'];
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
app.use(express.static(__dirname + '/static')); //Serves resources from static folder//Routes
//Routes
app.use('/api',require('./routes/news.routes.js'));
app.get('/api/file/:path',function(req, res){
	console.log(req.params);
    res.sendFile(__dirname + "/static/" + req.params.path);
});
//routines
routines.init();

//Starting server
app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
    schedule.scheduleJob(' * */4 * * *', () => {
      //every 4 minutes
      routines.init();
    }) 

})