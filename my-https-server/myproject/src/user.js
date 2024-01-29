

const users = [
  { username: 'user1', email: 'user1@example.com', password: 'password1' },
  { username: 'user2', email: 'user2@example.com', password: 'password2' },
  // Add more users as needed
];

function getUserByUsername(username) {
  return users.find(user => user.username === username);
}

module.exports = { getUserByUsername };
