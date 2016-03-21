import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.find('user', params.user_id);
  },

  actions: {
    
    deleteUser(user) {

      const really = confirm('Are you sure?');

      if (really) {
        user.destroyRecord();
        this.transitionTo('users');
      }
    }
    
  }
});
