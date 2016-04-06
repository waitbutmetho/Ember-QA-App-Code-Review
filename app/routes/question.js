import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  return this.store.findRecord('question', params.question_id);
},
actions: {
  resaveQuestion(question) {
    question.save();
    this.transitionTo('question', question.id);
  },
  saveNewAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      newAnswer.save().then(function() {
        return question.save();
      });
    }
  }
});
