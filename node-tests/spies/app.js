const db = require("./db");

module.exports.handleSignup = (email, password) => {
    // Chech if email alreay exists
    // Save the user to the db
    db.saveUser({
        email,
        password
    })

    //Send the welcome email
}