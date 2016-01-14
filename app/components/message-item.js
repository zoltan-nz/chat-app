import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    remove() {
      this.sendAction('action', this.get('item'));
    }
  }

});
