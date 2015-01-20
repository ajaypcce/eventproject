var express = require('express');
var hbs = require('hbs');
var path = require('path');
var bodyParser = require('body-Parser');
var mongoose = require('mongoose');


//user model controller
var eventsController = require('./controllers/events');

var app = express();

app.set('views',path.join(__dirname,'views'));

app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(          
    {
        extended:false
    }));

app.use(express.static('public')); 








//mongoose
mongoose.connect('mongodb://localhost:27017/bookmyevent');
mongoose.connection.on('error',function(){                        
console.error('MongoDb is not connected.Check if mongod is running');
});





//Routes
//app.get('/',eventsController.index);
app.get('/events',eventsController.getAllEvent);
app.get('/events/:ename',eventsController.getEventByEname);
app.get('/addevent',eventsController.createEvent);
app.post('/addevent',eventsController.postNewEvent);
app.get('/events/delbyname/:ename',eventsController.deleteEventByEname);








app.listen(3000);