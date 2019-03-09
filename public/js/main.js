'use strict';

import {AboutComponent} from "./components/About/About.js";
import {LeaderboardComponent} from "./components/Leaderboard/Leaderboard.js";
import {LoginComponent} from "./components/Login/Login.js";
import {MenuComponent} from "./components/Menu/Menu.js";
import {PlayComponent} from "./components/Play/Play.js";
import {ProfileComponent} from "./components/Profile/Profile.js";
import {RegistrationComponent} from "./components/Registration/Registration.js";
import {SettingsComponent} from "./components/Settings/Settings.js";

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
	const board = new LeaderboardComponent({
		el: container,
	});
	board.data = []; 
	board.render();
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
	console.log(event.target.href);
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
