import { Router } from 'express';
import passport from 'passport';
import User from '../models/user';

const router = Router();

//login
router.post('/login', passport.authenticate('local',{
	successRedirect: '/',
	failureRedirect: '/users/login?error=true',
}));

//logout
router.get('/logout', (req, res) => {
	req.logout();
	return res.redirect('/');
});



router.get('/registration', async (req, res) => {
    const userSuccess = await req.context.models.User.find();
      return res.send(userSuccess);
	});
	

//for user registration
//missing validation if the user is already in database
router.post('/registration', async (req, res, next) => {
	console.log(req.body);
	try {
		const user = new User({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});
		const savedUser = await user.save();

		if(savedUser) 
			return res.redirect('/registration?success=true');
		return next(new Error('Failed to save user!'));
	} catch(err) {
		return next(err);
	}
});

export default router;