import Ember from 'ember';

export default Ember.Component.extend({
  formVisible: false,
  actions: {
    showForm() {
      this.set('formVisible', true);
    },
    saveNewAnswer() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.get('model'),
      };
      this.sendAction('saveNewAnswer', params);
      this.set('formVisible', false);
    }
  }
});
