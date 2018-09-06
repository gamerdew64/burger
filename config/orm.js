// Linking to the connection.js file
var connection = require('./connection.js');


var orm = {
  selectAll: function(tableData, cb){
    connection.query('SELECT * FROM ' + tableData + ';', function(err,result){
      if(err) throw err;
      cb(result);
    });
  },
  updateSetWhere: function(tableData, condition, cb){
    connection.query('UPDATE ' + tableData +' SET devoured=true WHERE id=' + condition + ';', function(err,result){
      if(err)throw err;
      cb(result);
    });
  },
  insertIntoValues: function(tableData, val, cb){
    connection.query('INSERT INTO ' + tableData + " (burger_name) VALUES ('"+val+"');", function(err,result){
      if(err)throw err;
      cb(result);
    });
  }
};

// This is the object that is actually returned as the result of a require call.
module.exports = orm;
