import Ember from 'ember';
import layout from '../templates/components/techno-date-cell';
import moment from 'moment';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'td',
  format: 'M/D/YYYY',
  formattedValue: Ember.computed('format', 'value', {
    get: function() {
      let f = this.get('format');
      let v = this.get('value');
      if (v === undefined || v === null) {
        return '';
      }
      return moment(v).format(f);
    },
    set: function(key,value) {
      let f = this.get('format');
      let date = moment(value,f).toDate();
      this.set('value', date);
      return date;
    }
  })
});
