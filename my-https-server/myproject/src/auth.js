
const User = require('./user');

function login(username, password) {
  const user = User.getUserByUsername(username);
  if (user && user.password === password) {
    return { success: true, user: { username: user.username, email: user.email } };
  } else {
    return { success: false, error: 'Invalid username or password' };
  }
}

module.exports = { login };
