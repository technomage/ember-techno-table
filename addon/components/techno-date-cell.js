import Ember from 'ember';
import layout from '../templates/components/techno-date-cell';
import moment from 'moment';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'td',
  format: 'M/D/YYYY',
  formattedValue: Ember.computed({
    get: function() {
      let f = this.get('format');
      let v = this.get('value');
      return moment(v).format(f);
    },
    set: function(key,value) {
      return moment(this.get('format'), value).toDate();
    }
  })
});
