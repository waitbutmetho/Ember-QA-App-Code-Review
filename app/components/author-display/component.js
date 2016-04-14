import Ember from 'ember';

export default Ember.Component.extend({
  firstName: 'Josh',
  lastName: 'Gustafson',

  fullName: Ember.computed('firstName', 'lastName', function() {
    return this.get('firstName') +" "+ this.get('lastName');
  })
});
