const req = require("express/lib/request");
const Sequalize = require("sequelize");
const config = require("../config/config")[process.env.NODE_ENV];
console.log(process.env.NODE_ENV);
console.log(config);
const sequalize = new Sequalize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

const db = {};
db.Sequalize = Sequalize;
db.sequalize = sequalize;
db.users = require("../models/user.js")(sequalize, Sequalize);
db.sessions = require("../models/session.js")(sequalize, Sequalize);

module.exports = db;
