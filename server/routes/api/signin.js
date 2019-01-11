const User = require ('../../models/User');

module.exports = (app) => {
  
/*@EERBER: *GET* & *POST* Examples /////

 // app.get('/api/counters', (req, res, next) => {
  Counter.find()
  .exec()
  .then((counter) => res.json(counter))
  .catch((err) => next(err));
});

app.post('/api/counters', function (req, res, next) {
const counter = new Counter();

counter.save()
  .then(() => res.json(counter))
  .catch((err) => next(err));
}); */

 /*
 *Sign Up
 */
app.post('/api/account/signup', (req, res, next) => {
const { body } = req;
const { 
  firstName,
  lastName,
  password
} = body;
let {
  email
} = body;

if (!firstName) {
  return res.send({
    success: false,
    message: 'Error: First name cannot be blank.'
  });
}
if (!lastName) {
  return res.send({
    success: false,
    message: 'Error: Last name cannot be blank.'
  });
}
if (!email) {
  return res.send({
    success: false,
    message: 'Error: Email cannot be blank.'
  });
}
if (!password) {
  return res.send({
    success: false,
    message: 'Error: Password cannot be blank.'
  });
}

console.log('here');

  email = email.toLowerCase();

  //Steps:
  //1. Verify email doesn't exist
  //2. Save 
  User.find({
      email: email
  }, (err, previousUsers) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if (previousUsers.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Account already exist.'
      });
    }

      // Save the new user
      const newUser = new User();
      
      newUser.email = email;
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if (err) {
        return res.send({
            success: false,
            message: 'Error: Server error'
          });
        }
        return res.send({
          success: true,
          message: 'Signed up!'
        });
      });
  });

  });
};
