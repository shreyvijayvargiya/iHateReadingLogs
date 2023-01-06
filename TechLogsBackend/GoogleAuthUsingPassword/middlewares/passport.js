const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");

passport.use(
	new GoogleStrategy(
		{
			callbackURL: "http://localhost:3001/auth/google/callback",
			clientID:
				"499314077621-n7klfql9rfd8ho7kl26bu6p1vf9fgg5h.apps.googleusercontent.com",
			clientSecret: "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",
		},
		(accessToken, refreshToken, profile, done) => {
			// Check if user with same email or id exists in DB if not create one and save in DB
			const token = jwt.sign(
				{ email: profile.emails },
				process.env.JWTSecretKey,
				{ expiresIn: "14d" }
			);
			const user = {
				email: profile.emails,
				username: profile.username,
				id: profile.id,
				profileUrl: profile.profileUrl,
				token,
			};
			// Now token and user are ready store them in DB
			done(null, user);
		}
	)
);
passport.serializeUser((user, done) => {
	if (user) return done(null, user);
	else return done(null, false);
}),
	passport.deserializeUser((id, done) => {
		if (user) return done(null, user);
		else return done(null, false);
	}),
	(module.exports = passport);
