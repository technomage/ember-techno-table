import Ember from 'ember';
import layout from '../templates/components/techno-table';
import ColumnSpec from '../lib/column-spec';

export default Ember.Component.extend({
  layout: layout,
  sortDirection: null,
  sortColumn: null,
  columnSpecs: Ember.computed('columns', function() {
    let cols = this.get('columns');
    let specs = Ember.A();
    for (let c of cols) {
      let s = ColumnSpec.create(c);
      specs.push(s);
    }
    return specs;
  }),
  sortDirectionClass: Ember.computed('sortDirection', function() {
    let sortDirection = this.get('sortDirection');
    if (sortDirection == 'asc') {
      return 'sort-asc';
    } else if (sortDirection == 'desc') {
      return 'sort-desc';
    } else {
      return 'sorting';
    }
  }),
  sortIndicator: Ember.computed('sortDirection', function() {
    let sortDirection = this.get('sortDirection');
    if (sortDirection == 'none') {
      return '&#xe150;';  // e150 sortable
    } else if (sortDirection == 'asc') {
      return '&#xe155;';  // e155 ascending
    } else if (sortDirection == 'desc') {
      return '&#xe156;';  // e156 descending
    } else {
      return '&#xe150;';  // e150 sortable
    }
  }),
  actions: {
    showCreateComponent: function(obj) {
      this.set('newObj', obj);
      this.set('showCreate',true);
    },
    newObjChanged: function(obj) {
      this.get('objModified')(obj);
    },
    closeCreate: function() {
      this.set('showCreate', false);
      this.set('newObj', null);
    },
    changeSort: function(colName) {
      if (colName == this.get('sortColumn')) {
        let sortDir = this.get('sortDirection');
        if (sortDir == 'asc') {
          this.set('sortDirection', 'desc');
        } else if (sortDir == 'desc') {
          this.set('sortDirection', 'none');
        } else {
          this.set('sortDirection', 'asc');
        }
      } else {
        this.set('sortColumn', colName);
        this.set('sortDirection', 'asc');
      }
    }
  }
});
