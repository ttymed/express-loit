
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , MongoConnector = require('./mongo');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res){
  var mongoose = new MongoConnector();
  var entries = mongoose.getEntries(req, res);
  console.log(entries);
  // res.render('index', {
  //   'entries' : entries
  // });
});
app.post('/', function(req, res){
  var mongoose = new MongoConnector();
  mongoose.addDoc(
    {
      comment : req.body.comment,
      name : req.body.name,
      email : req.body.email
    });
  res.redirect("/");
})
//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
