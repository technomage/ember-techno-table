/* global accounting */
import Ember from 'ember';
import layout from '../templates/components/techno-currency-cell';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'td',
  formattedValue: Ember.computed({
    get: function() {
      let v = this.get('value');
      return accounting.formatMoney(v);
    },
    set: function(key,value) {
      return accounting.unformat(value);
    }
  })
});
