import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  createdAt: DS.attr('date'),
  belongsTo: DS.attr('channel')
});
