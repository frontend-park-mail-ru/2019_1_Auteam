'use strict';

import {AboutComponent} from "./components/About/About.js";
import {LeaderboardComponent} from "./components/Leaderboard/Leaderboard.js";
import {LoginComponent} from "./components/Login/Login.js";
import {MenuComponent} from "./components/Menu/Menu.js";
import {PlayComponent} from "./components/Play/Play.js";
import {ProfileComponent} from "./components/Profile/Profile.js";
import {RegistrationComponent} from "./components/Registration/Registration.js";
import {SettingsComponent} from "./components/Settings/Settings.js";
import "./utils/handlebars/helpers.js";

const {AjaxModule} = window;

const container = document.getElementById('js-container');

function createAbout() {
	const about = new AboutComponent({
		el: container,
	});
	about.render();
}

function createMenu() {
	const menu = new MenuComponent({
		el: container,
	});
	menu.render();
}

function createLeaderboard(users) {
	if (users) {
		const board = new LeaderboardComponent({
			el: container,
		});
		board.data = JSON.parse(JSON.stringify(users));
		board.render();
	} else {
		AjaxModule.doGet({
			callback(xhr) {
				const users = JSON.parse(xhr.responseText);
				container.innerHTML = '';
				createLeaderboard({users: users});
			},
			path: '/leaderboard',
		});
	}
}

function createLogin() {
	const login = new LoginComponent({
		el: container,
	});
	login.render();
}

function createPlay() {
	const play = new PlayComponent({
		el: container,
	});
	play.render();
}

function createProfile() {
	const profile = new ProfileComponent({
		el: container,
	});
	profile.render();
}

function createRegistration() {
	const registration = new RegistrationComponent({
		el: container,
	});
	registration.render();

	const form = document.getElementById('login');
	const inputs = form.getElementsByTagName('input');
	const err = document.getElementById('err');

	function checkValue(value, reg, message) {
		if (!reg.test(value)) {
			err.innerText = message;
		} else {
			err.innerText = '';
		}

		if (!value) {
			err.innerText = '';
		}
	};

	inputs['email'].addEventListener('input', function (event) {
		const EMAIL_REG = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		checkValue(event.target.value, EMAIL_REG, 'Email is not valid');
	});

	inputs['username'].addEventListener('input', function (event) {
		const USERNAME_REG = /^[-0-9a-z@_\-.]+$/i;
		checkValue(event.target.value, USERNAME_REG, 'Username is not valid');
	});

	function checkPassword(first, second) {
		if (first.value !== second.value) {
			err.innerText = 'Password didn\'t match';
		} else {
			err.innerText = '';
		}

		if (!first.value || !second.value) {
			err.innerText = '';
		}
	}

	inputs['password'].addEventListener('input', function (event) {
		checkPassword(event.target, inputs['reppass']);
	});

	inputs['reppass'].addEventListener('input', function (event) {
		checkPassword(event.target, inputs['password']);
	});
}

function createSettings() {
	const settings = new SettingsComponent({
		el: container,
	});
	settings.render();
}

const pages = {
	about: createAbout,
	menu: createMenu,
	leaderboard: createLeaderboard,
	login: createLogin,
	play: createPlay,
	profile: createProfile,
	registration: createRegistration,
	settings: createSettings
}

createMenu();

container.addEventListener('click', function (event) {
	const link = event.target.closest('a');
	if (link === null) {
		return;
	}
	const page = link.getAttribute('href');
	if (!(page in pages)) {
		return;
	}
	event.preventDefault();
	container.innerHTML = '';
	pages[ page ]();
});
