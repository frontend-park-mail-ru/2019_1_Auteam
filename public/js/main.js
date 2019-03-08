'use strict';

import {LeaderboardComponent} from "./components/Leaderboard/Leaderboard.js";
import {LoginComponent} from "./components/Login/Login.js";
import {MenuComponent} from "./components/Menu/Menu.js";
import {ProfileComponent} from "./components/Profile/Profile.js";
import {RegistrationComponent} from "./components/Registration/Registration.js";
import {SettingsComponent} from "./components/Settings/Settings.js";

const container = document.getElementById('js-container');

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

createMenu();