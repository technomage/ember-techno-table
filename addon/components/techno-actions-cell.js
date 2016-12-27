import Ember from 'ember';
import layout from '../templates/components/techno-actions-cell';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'td',
  actions: Ember.computed.alias('spec.options.actions')
});
