const mongoose = require('mongoose');
require('./user.model');
require('./gift.model');
require('./comment.model');
require('./rating.model');
var dbURI = 'mongodb://localhost/meanGifts';
mongoose.connect(dbURI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

