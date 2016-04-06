import Ember from 'ember';

export default Ember.Component.extend({
  formVisible: false,
  actions: {
    saveNewQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.sendAction("saveNewQuestion", params);
      this.set('formVisible', false);
    },
    showForm() {
      this.set('formVisible', true);
    }
  }
});
