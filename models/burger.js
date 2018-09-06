var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb){
    orm.selectAll('burgers',function(res){
      cb(res);
    });
  },
  updateSetWhere: function(id,cb){
    orm.updateSetWhere('burgers',id,cb);
  },
  insertIntoValues: function(name,cb){
    orm.insertIntoValues('burgers',name,cb);
  }
};

module.exports = burger;
