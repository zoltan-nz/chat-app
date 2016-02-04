# Chat-app (Ember.js 2.3 tutorial - beginner level)

## Contents

* The best way to install Node.js
* About package managers (npm, bower)
* Prerequisites for developing and running an Ember.js app
* Installation of Ember CLI
* Our first Ember Application
* Install Ember Inspector in Chrome/Firefox
* What is the add-on ecosystem around Ember.js? 
* The best way to add Bootstrap to an Ember project
* Adding a navigation bar to our project
* Routes in Ember.js
* Creating our first route and page: About


## The best way to install Node.js

There are a few ways to install Node.js, but it looks only one way gives you the best experience for long term on Mac.

### On Mac

The best way to install Node.js on Mac is `nvm`.

https://github.com/creationix/nvm

You have to have on your Mac the Command Line Tools. Or you install the full XCode from App Store either just use the small Command Line Tools installer: 
 
 ```
 xcode-select --install
 ```

(If you've just installed XCode, don't forget to launch it and accept the Terms and Conditions.)

You can use the install script for `nvm` installation.

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
```

However, I would encourage you to use the manual installation process. Nothing special there. Firstly, you just clone the whole repo in a subfolder in your home directory. (`~/.nvm`) Secondly, you add two extra lines to your console script.

Please follow these steps on `nvm` Readme: https://github.com/creationix/nvm#manual-install

You have to relaunch your Terminals. Maybe you have to log out and log back to activate the new settings.

List your installed node versions:

```
$ nvm list
```

Install the available node versions on the cloud:

```
$ nvm ls-remote
```

Choose the most recent version. (At the moment it is v5.5.0)
Install the selected version with the following command:

```
$ nvm install 5.5.0
```

Setup this version as the default.

```
$ nvm use 5.5.0
$ nvm alias default 5.5.0
```
Check your node version with

```
$ node -v
```
You should see `v5.5.0` if you installed the above version.

You can update your `npm` to the latest.

```
$ npm install -g npm
```

After the update, the npm version, `npm -v`, should be at least `3.6.0` or above.

Alternatives, but not suggested:
* Official Installer: https://nodejs.org/en/download/
* Using brew: https://nodejs.org/en/download/package-manager/#osx

### On Linux

Please avoid to install Node.js with `apt-get` on Ubuntu.
If you already installed Node.js with the built in package manager, please remove that. (`sudo apt-get purge nodejs && sudo apt-get autoremove && sudo apt-get autoclean`)

The installation process on Linux is the same as on OSX.

With the provided script:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
```

(Please read the instructions under OSX section.)

```
$ nvm list
$ nvm ls-remote
$ nvm install 5.5.0
$ nvm use 5.5.0
$ nvm alias default 5.5.0
$ node -v
$ npm install -g npm
$ npm -v
```

### On Windows

On Windows, if you don't need more version from Node.js, you can use the [official installer](https://nodejs.org/en/download/stable/).

Install also [Git for Windows](https://git-for-windows.github.io/).
 
Don't forget to read [this instruction](http://ember-cli.com/user-guide/#windows). 

Install and run `ember-cli-windows`

```
$ npm install ember-cli-windows -g
$ ember-cli-windows
```

## Package managers (node, bower)

`npm` is Node.js' package manager. It organises all dependencies in `package.json` file. In Ember.js project we use Node.js and `npm` for keeping our development process smooth and automatic, however, when you deploy your project, it will be only html, javascript, stylesheets and assets, like images and fonts. For example node packages help to combine your final project, but they won't be fully part of your concatenated application.

`npm` command line tool comes with Node.js. You can check out your version with `npm -v` and you can update with `npm install -g npm`. The `-g` means, this package will be global, so you can run it from every directory on your computer.

Important commands:

```
$ npm install
$ npm update
```
Learn more about `npm` here:

* [Getting started guide](https://docs.npmjs.com/getting-started/what-is-npm)
* [Package directory](www.npmjs.com)

`bower` is a package manager for assets. We use `bower.json` for listing javascript libraries and css frameworks, which need to run our frontend app when we publish. So these packages will be combined inside our final codebase. For example Bootstrap, jQuery, D3.js libraries will appear in this list if we need them.

Install bower:

```
npm install -g bower
```

* [More about Bower](http://bower.io/)

Luckily in Ember.js development, we don't really have to directly manage these packages, because Ember CLI addons deal with all requirements.

## Prerequisites for running an Ember.js app

You will need the followings properly installed on your computer. These help in development process.

* [Git](http://git-scm.com/)

Probably you already have `git` on your computer. (It comes with XCode on Mac, on Windows you can install it with [Git for Windows](https://git-for-windows.github.io/)) 

* [Node.js](http://nodejs.org/) (with NPM)

See above.

* [Bower](http://bower.io/)

See above.

```
npm install -g bower
```

* [PhantomJS](http://phantomjs.org/)

PhantomJS is a headless browser. Ember.js uses it for running tests.

```
npm install -g phantomjs
```

* (Optional) [Watchman](https://facebook.github.io/watchman/)

Watchman is a tool for watching changes in your project folder, it triggers a rebuild action when you modify something in your code. It helps in live-reloading during the development process. (Only on Mac and on Linux at the moment. Facebook promised a Windows version soon.)

More details about [Watchman Installation](https://facebook.github.io/watchman/docs/install.html#build-install)

```
$ brew update
$ brew install watchman
```

## Install ember-cli

Open your terminal and install the latest [Ember CLI](http://www.ember-cli.com/)

```
$ npm install -g ember-cli@2.3.0-beta.1
```

This will install or if you already had will update to the latest version

You can check it with
```
$ ember -v
```
## Create your new app

```
$ ember new chat-app
```

It will create a new folder with the app name, download all npm and bower packages.

Navigate in your new app folder:
```
$ cd chat-app
```

Launch your app with `ember server` and open in your browser.

```
$ ember server
```

Open the following link: [http://localhost:4200](http://localhost:4200)

## Install Ember Inspector Chrome Extension

Follow instructions on the [official guide](https://guides.emberjs.com/v2.3.0/ember-inspector/installation/).

## Install bootstrap

We can find plugins for Ember on these websites: 

* [www.emberobserver.com](http://www.emberobserver.com)
* [www.emberaddons.com](http://www.emberaddons.com)

If you search bootstrap, you will find different bootstrap add-ons. We will use `ember-bootstrap` in this case.

Run the following command in your terminal. (The best if you stop your `ember server` with `Ctrl+C` and relaunch after you installed the add-on package.)

```
$ ember install ember-bootstrap
```

Check the style on the home page. You will see, that the font style is changed.

## Update the main application template

The main application template is in `/app/templates` folder.

Update the code in `application.hbs`:

```html
<div class="container">
 <div class="page-header">
   <h1>Meetup Chat App
     <small>Let's talk about Ember</small>
   </h1>
 </div>

 {{outlet}}
</div>
```

This header will appear on each page of our application. The content of the subpages will be inserted inside `{{outlet}}` tag.

## Create the home page content

```
$ ember generate template index
```

plain html version:

```html
<div class="jumbotron text-center">
 <a href="/join" class="btn btn-success btn-lg">Join to the Chat</a>
</div>
```

You can see the changes if you run `ember s` and open the app in your browser.

Now, let's update this code with handlebar `link-to` helper:

```html
<div class="jumbotron text-center">
 {{#link-to 'join' class="btn btn-success btn-lg">Join to the Chat{{/link-to}}
</div>
```

* Check the error message in console.
* So let's generate a new page.

## Generate a /join page

```
$ ember generate route join
```

```html
<div class="jumbotron text-center">
 <div class="container">
   <div class="col-md-4 col-md-offset-4">
     {{input class='form-control input-lg' placeholder="Enter your name." value=name}}
   </div>
  </div>
</div>
```

Add an if block to join page

```html
 <div class="col-md-4 col-md-offset-4">
   {{#if name}}
     <h2>Please join to the chat {{name}}!</h2>
<a href='/chat' class='btn btn-lg btn-success'>Launch</a>
        {{else}}
     <p>Please enter your nickname and click the launch button.</p>
   {{/if}}
</div>
```

Update the link with `link-to`:

```
{{#link-to 'chat' class="btn btn-lg btn-success"}}Launch{{/link-to}}
```

* Check the error message again.
* Generate 'chat' route.

```
$ ember g route chat
```


## Create our backend system

Before we go forward, let's setup our backend system on [www.firebase.com](http://www.firebase.com)

Instructions: [https://www.firebase.com/docs/web/libraries/ember/](https://www.firebase.com/docs/web/libraries/ember/)

```
$ ember install emberfire
```

Setup configuration `config/environment.js`

Backend created.

## Playing with mode and Ember Data

Let's generate our model

```
$ ember generate model message user:string text:string createdAt:date
```

We get `user` in our `join` page and we will pass forward to the `chat` page as a parameter in our url.

Have to update the `app/router.js` first. Add `path` property to the `chat` route.

```javascript
// app/router.js
...
Router.map(function() {
  this.route('join');
  this.route('chat', { path: '/chat/:user_name' });
});
...
```

We can pass now our user name with `link-to`. Update the `link-to` line in `join` template.

```html
// app/templates/join.hbs
{{#link-to 'chat' user class="btn btn-lg btn-success"}}Launch{{/link-to}}
```

## Add chat message input

`app/templates/chat.hbs`

```html
<nav class="navbar navbar-default navbar-fixed-bottom">
 <div class="container">
   <div class="navbar-form form-horizontal">
     <div class="form-group">
       <div class="col-sm-12">
         {{input class='form-control input-lg input-block' placeholder='Your message' value=message}}
       </div>
     </div>
     <button class="btn btn-primary btn-lg" {{action 'send' user message}}>Send</button>
   </div>
 </div>
</nav>
```

Implement the action in chat route `app/routes/chat.js`

```javascript
actions: {
 send(user, message) {
   this.store.createRecord('message', {
     user: user,
     text: message,
     createdAt: new Date()
   }).save();
   
   this.controller.set('message', '');
 }
}
```

The following line clear the `message` property.

```
this.controller.set('message', '');
```

## Let's create a chat message item component

```
$ ember g component message-item
```

`app/templates/components/message-item.hbs`

```html
<div class="alert alert-info">
 <button class="close" {{action 'remove'}}><span aria-hidden="true">&times;</span></button>
 <p><span class="label label-primary">{{item.user}}</span> {{item.text}}</p>
</div>
```

## Download all chat message

When we navigate to `/chat` Ember.js will call our `/app/routes/chat.js` file and will check, wheater is there something in the `model` hook.

```javascript
import Ember from 'ember';

export default Ember.Route.extend({

  user: null,

  model(params) {
    this.set('user', params.user_name);
    return this.store.findAll('message');
  }
});

```

Using each helper to insert all the message.

```
{{#each model as |message|}}
 {{message-item item=message}}
{{/each}}
```

Add action to the component

```
actions: {
 remove() {
   this.sendAction('action', this.get('record'));
 }
}
```

Update message-item on chat.hbs

```
{{#each model as |message|}}
  {{message-item
  item=message
  action='deleteMessage'
  }}
{{/each}}
```

Add deleteMessage action to route `app/route/chat.js`

```
deleteMessage(record) {
 record.destroyRecord();
}
```
