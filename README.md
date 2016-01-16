# Chat-app

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

# Implementation Log

## Getting started

We assume that you have the latest node.js installed.

## Install ember-cli

Open your terminal and start with

```
$ npm install -g ember-cli
```
This installs ember-cli version 1.13.14

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

## Update Ember to v2.3.0 and Ember Data to v2.3.0

Open the project in your favourite editor.
Update package versions in `bower.json`.

* Change `ember` version to `2.3.0`
* Update `ember-cli-shims` to `0.1.0`
* Remove `ember-data`, because from version `2.3`, we need `ember-data` only in `package.json`.


```
// bower.json
{
  "name": "chat-app",
  "dependencies": {
    "ember": "2.3.0",
    "ember-cli-shims": "0.1.0",
    "ember-cli-test-loader": "0.2.1",
    "ember-data": "2.3.0",
    ...
```

Find `ember-data` in `package.json` and update the version to `2.3.0`

```
// package.json
{
    ...
    "ember-cli-uglify": "^1.2.0",
    "ember-data": "2.3.0",
    "ember-disable-proxy-controllers": "^1.0.1",
    ...
}
```

Because we modified `package.json` and `bower.json`, we have to run the following commands in our terminal. 

```
$ npm install && bower install
```

Launch your app with `ember server` and open in your browser.

```
$ ember server
```

Open the following link in your browser: [http://localhost:4200](http://localhost:4200)

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
 }
}
```

Empty the input box when message sent.

```
this.controller.set('message', '');
```

## Let's create a chat message item component

```
$ ember g component message-item
```

```html
<div class="alert alert-info">
 <button class="close" {{action 'remove'}}><span aria-hidden="true">&times;</span></button>
 <p><span class="label label-primary">{{item.user}}</span> {{item.text}}</p>
</div>
```

## Download all chat message

When we navigate to `/chat` Ember.js will call our `/app/routes/chat.js` file and it will check, is there something in the `model` hook.

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
   name=message.user
   message=message.text
   date=message.createdAt
   action='deleteMessage'
   record=message
 }}
{{/each}}
```

Add deleteMessage action to route

```
deleteMessage(record) {
 record.destroyRecord();
}
```

