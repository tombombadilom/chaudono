var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var findit = require('findit');
var crypto = require('crypto');
var Sequelize = require('sequelize');
var _ = require('underscore');

 var chaudono = module.exports = function chaudono(config) {
 	this.config = config;
	var self = this;

	//connect to database
	var sequelize = new Sequelize(config.database.database, config.database.user, config.database.password, {
		host: config.database.host,
		port: config.database.port,
		dialect: config.database.protocol,
		logging: config.database.logging
	});
	sequelize.sync({force: true}).success(function() {
		console.log('Database connected.')
		self.helloWorld();
	}).error(function(error) {
		console.log('Database sync error: '+error);
	})
};

chaudono.prototype = {
	helloWorld: function () {
	  console.log('hello!');
	  return true;
	}
}
