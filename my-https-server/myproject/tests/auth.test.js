

const { login } = require('../src/auth');
const User = require('../src/user');

describe('login', () => {
  it('logs in a user and spies on the call to getUserByUsername', () => {
    // Set up a spy to track the call to the getUserByUsername function
    const getUserByUsernameSpy = jest.spyOn(User, 'getUserByUsername');

    // Set up the mock to return a simulated user
    getUserByUsernameSpy.mockReturnValue({ username: 'user1', email: 'user1@example.com', password: 'password1' });

    // Call the function we are testing
    const result = login('user1', 'password1');

    // Verify that the function returns the expected result
    expect(result).toEqual({ success: true, user: { username: 'user1', email: 'user1@example.com' } });

    // Verify that getUserByUsername was called correctly
    expect(getUserByUsernameSpy).toHaveBeenCalledWith('user1');

    // Clean up the spy after the test
    getUserByUsernameSpy.mockRestore();
  });
});
