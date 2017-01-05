/*
	Import the main components from the angular js 2 
	packadges area, core and platform/browser
*/
import { bootstrap } from 'angular2/platform/browser'; // not to be confused w bootstrap 2.0
import { Component } from '@angular2/core';

/*
	The main component decorator with it matadata inside
*/
@Component({
	selector: 'main-app',
	template: `<i>Hello World!</i>`
})
export class MainApp {
	name = 'Lore';
}