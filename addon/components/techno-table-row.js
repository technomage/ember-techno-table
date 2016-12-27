import Ember from 'ember';
import layout from '../templates/components/techno-table-row';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'tr',
  className: 'table-row',
  editing: false,
  actions: {
    fireAction: function(obj, act) {
      act(obj, this);
    },
    close: function() {
      this.set('editing',false);
    }
  }
});
