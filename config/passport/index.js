module.exports = function(passport) {

    passport.serializeUser((user, done) => {
        var sessionUser = { _id: user._id, username: user.local.username, email: user.local.email, roles: user.roles }
        done(null, sessionUser)
    })

    passport.deserializeUser((sessionUser, done) => {
        done(null, sessionUser)
    })
}