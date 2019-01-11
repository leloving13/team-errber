// Copy this file as config.js in the same folder, with the proper database connection URI.

module.exports = {
  db: 'mongodb://username:password@url:port/db',
  //@EERBER: Update the db_dev link with mongo repository once it is set up (i.e. 'mongodb://url:port/db')
  db_dev: 'mongodb://localhost:27017/login_demo',
};
