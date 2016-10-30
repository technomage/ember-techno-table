import Ember from 'ember';
import layout from '../templates/components/techno-table';
import ColumnSpec from '../lib/column-spec';

export default Ember.Component.extend({
  layout: layout,
  columnSpecs: Ember.computed('columns', function() {
    let cols = this.get('columns');
    let specs = Ember.A();
    for (let c of cols) {
      let s = ColumnSpec.create(c);
      specs.push(s);
    }
    return specs;
  }),
  actions: {
    showCreateComponent: function(obj) {
      this.set('newObj', obj);
      this.set('showCreate',true);
    },
    newObjChanged: function() {
      this.get('objModified')(this.get('newObj'));
    }
  }
});
