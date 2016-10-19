import Ember from 'ember';

export default Ember.Object.extend({
  headingClassList: Ember.computed('name','headingClass', function() {
    let hc = this.get('headingClass');
    let n = this.get('name');
    if (hc) {
      return hc;
    } else if (n) {
      return n;
    } else {
      return "";
    }
  }),
  bodyClassList: Ember.computed('name','bodyClass', function() {
    let hc = this.get('bodyClass');
    let n = this.get('name');
    if (hc) {
      return hc;
    } else if (n) {
      return n;
    } else {
      return "";
    }
  }),
  forObject: function(obj) {
    return obj.get(this.get('name'));
  }
});
