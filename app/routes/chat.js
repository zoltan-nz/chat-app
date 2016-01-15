import Ember from 'ember';

export default Ember.Route.extend({

  user: null,

  model(params) {
    this.set('user', params.user_name);
    return this.store.findAll('message');
  },

  actions: {
    createMessage(message) {
      this.store.createRecord('message', {
        user: this.get('user'),
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
