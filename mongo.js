var mongoose = require('mongoose');

var mongouri = 'mongodb://localhost/express-loit';
var db = mongoose.connect(mongouri, { server: { auto_reconnect: true } }, function (err, db) {
    if(err) {
    	throw err;
    }
}); 

var textEntryItem = new mongoose.Schema({
	textField: {type: String}
});
TextEntry = mongoose.model('TextEntry', textEntryItem);

function MongoConnector(){
	//console.log(this instanceof MongoConnector);
	if(false === (this instanceof MongoConnector)) {
    return new MongoConnector();
  }
};

MongoConnector.prototype.addText = function(data){
		var item = new TextEntry();
		item.textField = data;
		item.save(function(err, item){
			if(err) return console.error("OOPS!");
		});
};

MongoConnector.prototype.getEntries = function(req, res){
		TextEntry.find({}, function(err, entries){
			console.log(entries);
			//if (err) return [];
			//return entries;
			res.render('index', {
		    'entries' : entries
		  });
		});
};

module.exports = MongoConnector;