'use strict';

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const morgan = require('morgan');
const uuid = require('uuid/v4');
const path = require('path');
const app = express();


app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(body.json());
app.use(cookie());


const users = {
	'ozudina': {
		username: 'ozudina',
		email: 'ozudina@gmail.com',
		password: 'password',
		score: 333,
	},
	'ekislukha': {
		username: 'ekislukha',
		email: 'ekislukha@gmail.com',
		password: 'password',
		score: 1,
	},
	'mlozhechko': {
		username: 'mlozhechko',
		email: 'mlozhechko@gmail.com',
		password: 'password',
		score: 77,
	},
	'dpoponkin': {
		username: 'dpoponkin',
		email: 'dpoponkin@gmail.com',
		password: 'password',
		score: 90,
	},
	'falcon2212': {
		username: 'falcon2212',
		email: 'falcon2212@gmail.com',
		password: 'password',
		score: 100500,
	},
	'ozudina1': {
		username: 'ozudina1',
		email: 'ozudina@gmail.com',
		password: 'password',
		score: 33,
	},
	'ekislukha2': {
		username: 'ekislukha2',
		email: 'ekislukha@gmail.com',
		password: 'password',
		score: 1,
	},
	'mlozhechko1': {
		username: 'mlozhechko1',
		email: 'mlozhechko@gmail.com',
		password: 'password',
		score: 77,
	},
	'dpoponkin3': {
		username: 'dpoponkin3',
		email: 'dpoponkin@gmail.com',
		password: 'password',
		score: 930,
	},
	'falcon22122': {
		username: 'falcon22122',
		email: 'falcon2212@gmail.com',
		password: 'password',
		score: 1000,
	},
};
const ids = {};

app.post('/signup', function (req, res) {
	const password = req.body.password;
	const email = req.body.email;
	const age = req.body.age;
	if (
		!username || !password || !email ||
		!password.match(/^\S{4,}$/) ||
		!email.match(/@/)
	) {
		return res.status(400).json({error: 'Не валидные данные пользователя'});
	}
	if (users[email]) {
		return res.status(400).json({error: 'Пользователь уже существует'});
	}

	const id = uuid();
	const user = {username, password, email, score: 0};
	ids[id] = email;
	users[username] = user;

	res.cookie('sessionid', id, {expires: new Date(Date.now() + 1000 * 60 * 10)});
	res.status(201).json({id});
});

app.post('/login', function (req, res) {
	const password = req.body.password;
	const email = req.body.email;
	if (!username || !password || !email) {
		return res.status(400).json({error: 'Не указан username, E-Mail или пароль'});
	}
	if (!users[username] || users[username].password !== password) {
		return res.status(400).json({error: 'Не верный E-Mail и/или пароль'});
	}

	const id = uuid();
	ids[id] = username;

	res.cookie('sessionid', id, {expires: new Date(Date.now() + 1000 * 60 * 10)});
	res.status(200).json({id});
});

app.get('/profile', function (req, res) {
	const id = req.cookies['sessionid'];
	const username = ids[id];
	if (!username || !users[username]) {
		return res.status(401).end();
	}

	res.json(users[username]);
});

app.get('/leaderboard', function (req, res) {
	const scorelist = Object.values(users)
		.sort((l, r) => r.score - l.score)
		.map(user => {
			return {
				username: user.username,
				score: user.score,
			}
		});
	res.json(scorelist);
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});
