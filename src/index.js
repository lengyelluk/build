import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import mongoose from 'mongoose';
import models, { connectDb } from './models';
import routes from './routes';
import auth from './lib/auth';
import path from 'path';
const MongoStore = require('connect-mongo')(session);

const app = express();

app.use(express.static(path.join(__dirname, '/build')));
//Application level middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({
	secret: 'very secret key',
	resave: true,
	saveUninitialized: false,
	store: new MongoStore({mongooseConnection: mongoose.connection}),
}));

app.use(auth.initialize);
app.use(auth.session);
//app.use(auth.setUser);

app.use(async (req, res, next) => {
	try {
		req.session.visit = req.session.visit ? req.session.visit + 1 : 1;
		return next();
	} catch(err) {
		return next(err);
	}
})

app.use(async (req, res, next) => {
	req.context = {
		models
	};
	next();
});

//Routes
app.use('/cards', routes.card);
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);
app.use('/comments', routes.comment);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

connectDb().then( () => {
	console.log('connected to MongoDB');
	app.listen(process.env.PORT); 
	console.log(`App listening on port ${process.env.PORT}`);
	})
	.catch((err) => {
		console.error(err);
	});

