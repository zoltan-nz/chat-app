import Ember from 'ember';

export default Ember.Controller.extend({

  isDisabled: Ember.computed.or('isEmpty', 'isNotValid'),

  isEmpty: Ember.computed.empty('newUser.name'),

  isNotValid: Ember.computed.not('isValid'),
  isValid: Ember.computed.match('newUser.email', /^.+@.+\..+$/)

});
