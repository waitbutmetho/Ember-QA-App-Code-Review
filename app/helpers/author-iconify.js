import Ember from 'ember';

export function authorIconify() {
  return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
}
export default Ember.Helper.helper(authorIconify);
