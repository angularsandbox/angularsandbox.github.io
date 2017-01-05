# Introduction 

This is a research on how to build basic Angular JS 2 applications. 

# The main advantages for using Angular 2

* Dynamic html
* Template 
* Fast rendering
* HTTP services like POST and GET ?
* Components 
* Form and input handling
* Events 
* Routing ?
* Latest javascript standards like ES2015 / ES2016 aka ES6
* Mobile support


## Components 

> Basic building block of the UI. An Angular application is a tree of Angular components.

Source: https://youtu.be/-zW1zHqsdyc?t=373

### Example of components

This is the most basic example

![Example](https://raw.githubusercontent.com/angularsandbox/angularsandbox.github.io/master/docs/research/img/example-component.jpg "Visual example from the guide")

## Good practice for folder structure

It's a good idea to just keep the index in `/` and all the rest in `/src/` or `/app/`.

The every the main.ts file should be in the main folder along with app.module.ts with all the sub-components in components/ like user.component.ts. 

Example: 

```
index.html
|
+-- src/
    |
    src/ main.ts
    |
    src/ app.modules.ts
    |
    src/ components/
         |
         user.component.ts

```