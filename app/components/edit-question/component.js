import Ember from 'ember';

export default Ember.Component.extend({
  formVisible: false,
actions: {
  showForm() {
    this.set("formVisible", true);
  },
  saveEditQuestion(question) {
    this.sendAction('resaveQuestion', question);
    this.set('formVisible', false);
  }
}
});
