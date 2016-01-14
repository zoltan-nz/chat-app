import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('message');
  },

  actions: {
    send(user, message) {
      this.store.createRecord('message', {
        user: user,
        text: message,
        createdAt: new Date()
      }).save();

      this.controller.set('message', '');
    },

    deleteMessage(record) {
      record.destroyRecord();
    }
  }
});
