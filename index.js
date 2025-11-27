/**
 * Initializing a login tracker for a given user.
 * @param {Object} userInfo contains username and pass
 * E.g { username: "user1", password: "password123" }
 * @returns {Function} - A function to handling login attempts
 */
function createLoginTracker(userInfo) {
    // Tracks the number of login attempts
    let attemptCount = 0;

    // Maximum allowed login attempts
    const MAX_ATTEMPTS = 3;

    /**
     * Handles a single login attempt.
     * @param {string} passwordAttempt - The password entered by the user
     * @returns {string} - Message indicating success, failure, or account locked
     */
    const loginAttempt = (passwordAttempt) => {
        // If maximum attempts exceeded, lock the account
        if (attemptCount >= MAX_ATTEMPTS) {
            return "Account locked due to too many failed login attempts";
        }

        // Increment attempt counter
        attemptCount++;

        // Check if entered password matches the user's password
        if (passwordAttempt === userInfo.password) {
            return "Login successful"; // Successful login
        } else {
            return `Attempt ${attemptCount}: Login failed`; // Failed login
        }
    };

    // Return the inner function 
    return loginAttempt;
}

// Export the function for testing purposes
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
