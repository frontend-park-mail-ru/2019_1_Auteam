'use strict';

import {AboutComponent} from './components/About/About.js';
import {LeaderboardComponent} from './components/Leaderboard/Leaderboard.js';
import {LoginComponent} from './components/Login/Login.js';
import {MenuComponent} from './components/Menu/Menu.js';
import {PlayComponent} from './components/Play/Play.js';
import {ProfileComponent} from './components/Profile/Profile.js';
import {RegistrationComponent} from './components/Registration/Registration.js';
import {SettingsComponent} from './components/Settings/Settings.js';
import './utils/handlebars/helpers.js';
import {NEW_USER, LOGGED_IN} from './utils/constants.js';

const {AjaxModule} = window;

const container = document.getElementById('js-container');

window.userStatus = NEW_USER;

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
  menu.data = userStatus === NEW_USER ? 'registration' : 'profile';
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
        createLeaderboard({users: users});
      },
      path: '/user/list',
    });
  }
}

function createLogin() {
  const login = new LoginComponent({
    el: container,
  });
  login.render();
  const loginForm = document.getElementById("login_form");
  const inputs = loginForm.getElementsByTagName('input');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault()
    if (inputs["username"].value == "" ||
        inputs["password"].value == "") {
      return;
    }
    AjaxModule.doPost({
      callback(xhr) {
        if (xhr.status == 200) {
          window.userStatus = 1;
          createProfile();
        }
      },
      body: {
        username : inputs["username"].value,
        password : inputs["password"].value,
      },
      path: '/user/login', 
    });
  });
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
  AjaxModule.doPost({
    callback(xhr) {
      if (xhr.status == 200) {
        window.userStatus = 1;
        data = JSON.parse(xhr.responseText())
        const inputs = loginForm.getElementsByTagName('input');
      }
    },
    path: '/user/session', 
  });
}

function createRegistration() {
  const registration = new RegistrationComponent({
    el: container,
  });
  registration.render();

  const form = document.getElementById('login');
  const inputs = form.getElementsByTagName('input');
  const err = document.getElementById('err');
  const submit = document.getElementById('submit_register')

  let isEmailValid = false
  let isUsernameValid = false
  let isPasswordValid = false

  function checkValue(value, reg, message) {
    if (!reg.test(value)) {
      err.innerText = message;
      return false
    } else {
      err.innerText = '';
      return true
    }

    if (!value) {
      err.innerText = '';
      return false
    }
  };

  inputs['email'].addEventListener('input', function(event) {
    const EMAIL_REG = /@/;
    isEmailValid = checkValue(event.target.value, EMAIL_REG, 'Email is not valid');
  });

  inputs['username'].addEventListener('input', function(event) {
    const USERNAME_REG = /^[-0-9a-z@_\-.]+$/i;
    isUsernameValid = checkValue(event.target.value, USERNAME_REG, 'Username is not valid');
  });

  function checkPassword(first, second) {
    if (first.value !== second.value) {
      err.innerText = 'Password didn\'t match';
      return false
    } else {
      err.innerText = '';
      return true
    }

    if (!first.value || !second.value) {
      err.innerText = '';
      return false
    }
  }

  inputs['password'].addEventListener('input', function(event) {
    isPasswordValid = checkPassword(event.target, inputs['reppass']);
  });

  inputs['reppass'].addEventListener('input', function(event) {
    isPasswordValid = checkPassword(event.target, inputs['password']);
  });

  function register() {
    if (!isEmailValid || !isPasswordValid || !isUsernameValid) {
      return
    }
    AjaxModule.doPost({
      callback(xhr) {
        if (xhr.status == 200) {
          const validation = JSON.parse(xhr.responseText)
          if (validation["usernameValidate"]["success"] == true &&
              validation["passwordValidate"]["success"] == true &&
              validation["emailValidate"]["success"] == true) {
            createProfile()
          }
        }
      },
      body: {
        userInfo: {
          username: inputs["username"].value,
          email: inputs["email"].value
        },
        password: inputs["password"].value
      },
      path: '/user/signup'
    })
  }

  const regForm = document.getElementById('reg_form');
  regForm.addEventListener('submit', function(event) {
    event.preventDefault()
    register()
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
  settings: createSettings,
};

createMenu();

container.addEventListener('click', function(event) {
  const link = event.target.closest('a');
  if (link === null) {
    return;
  }
  const page = link.getAttribute('href');
  if (!(page in pages)) {
    return;
  }
  event.preventDefault();
  pages[page]();
});
