import {NgModule,Component}	from '@angular/core';
import {BrowserModule}		from '@angular/platform-browser';

@Component({
	selector: 'my-app',
	template: `
		<div>
			{{ text }}
		</div>
	`
}) export class App { text = 'Hello world!'; }

@NgModule({
  imports:		[BrowserModule],
  declarations:	[App],
  bootstrap:	[App]
}) export class AppModule {}