import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('user');
  },

  setupController(controller, model) {
    this._super(controller, model);

    this.controller.set('newUser', {});
  },

  actions: {
    addUser(newUser) {
      this.store.createRecord('user', { name: newUser.name, email: newUser.email }).save();

      this.controller.set('newUser', {});
    }
  }
});
