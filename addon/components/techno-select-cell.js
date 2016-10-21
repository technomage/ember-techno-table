import Ember from 'ember';
import layout from '../templates/components/techno-select-cell';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'td',
  nativeMobile: false,
  prompt: Ember.computed('spec', function() {
    return this.get('spec.prompt');
  }),
  valuePath: Ember.computed('spec', function() {
    let spec = this.get('spec');
    if (spec && spec.get('valuePath')) {
      return `content.${spec.get('valuePath')}`;
    } else {
      return undefined;
    }
  }),
  labelPath: Ember.computed('spec', function() {
    let spec = this.get('spec');
    if (spec && spec.get('labelPath')) {
      return `content.${spec.get('labelPath')}`;
    } else {
      return undefined;
    }
  }),
  options: Ember.computed('spec.options', 'spec.options.@each', function() {
    return this.get('spec.options');
  }),
  search: Ember.computed('spec.search', function() {
    if (this.get('spec.search')) {
      return this.get('spec.search');
    } else {
      return true;
    }
  }),
  multiple: Ember.computed('spec.multiple', function() {
    if (this.get('spec.multiple')) {
      return this.get('spec.multiple');
    } else {
      return false;
    }
  })
});
