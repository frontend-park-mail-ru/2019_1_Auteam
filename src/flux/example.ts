'use strict';

import '../public/css/common.css';
import '../public/css/main.css';
import '../public/css/hexagons.css';
import '../public/css/profile.css'

import {MenuComponent} from "../public/js/components/Menu/Menu";

const container = document.getElementById('js-container');

console.log("qwe");

function MenuView() {
    const menu = new MenuComponent(container);
    menu.data = 'register';
    menu.render();
}

MenuView();
