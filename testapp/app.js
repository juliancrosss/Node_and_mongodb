var MongoClient = require('mongodb').MongoClient;
var dbhost = 'mongodb://localhost:27017/test',
	myCollection = 'chapter2';

//dbhost variable for the db server information myCollection collection 'Table'
//Test is the database
//chapter2 is the collection

var seedData = function(db, callback){
	db.collection(myCollection).find({}, {}, {}).toArray(
		function(err, docs){
			if(docs.length <= 0){
				console.log('No data. Seeding');

				//count each record as its inserted
				var ihandler = function(err, recs){
					if(err) throw err;
					inserted++;
				}

				var toinsert = 2,
					inserted = 0;

				//perform a MongoDB insert for each record
				db.collection(myCollection).insert({
					'Title': 'Snow Crash',
					'Author': 'Neal Stephenson'
				}, ihandler);
				db.collection(myCollection).insert({
					'Title': 'Neuromancer',
					'Author': 'William Gibson'
				}, ihandler);

				//wait for the 2 records above to be finished
				//inserting
				var sync = setInterval(function(){
					if(inserted === toinsert){
						clearInterval(sync);
						callback(db);
					}
				}, 50);
				return;
			}
			callback(db);
			return;
		}
	);
}

var showDocs = function(db){
	console.log("Listing books:");
	var options = {
		sort: [['Title',1]]

	};
	//find and return an array of all records in the collection
	db.collection(myCollection).find({}, {}, options).toArray(
		function(err, docs){
			if(err) throw err;

			//for each item in the colletion, print the title and author
			for(var d = 0; d < docs.length; d++){
				console.log(docs[d].Title + '; '+ docs[d].Author);
			}
			db.close();
		}
	);
}

MongoClient.connect(dbhost, function(err, db){
	if(err) throw err;
	//once connected, execute the seedData function to start the app
	seedData(db, showDocs);
});
