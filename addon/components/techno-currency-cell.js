import Ember from 'ember';
import layout from '../templates/components/techno-currency-cell';
import accounting from 'accounting';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'td',
  formattedValue: Ember.computed('value', {
    get: function() {
      let v = this.get('value');
      // console.log('@@@@ Formatting currency cell: ',v);
      return accounting.formatMoney(v);
    },
    set: function(key,value) {
      // console.log('@@@@ Setting currency cell: ',value);
      return accounting.unformat(value);
    }
  })
});
