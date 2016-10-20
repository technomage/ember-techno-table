/* jshint expr:true */
import Ember from 'ember';
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'techno-select-cell',
  'Integration: TechnoSelectCellComponent',
  {
    integration: true
  },
  function() {
    it('renders with prompt', function() {
      this.render(hbs`{{techno-select-cell prompt='testing'}}`);
      expect(this.$()).to.have.length(1);
      expect(this.$().find('select option:contains("testing")').length, 'prompt options count').to.eq(1);
    });
    it('renders without prompt', function() {
      this.render(hbs`{{techno-select-cell}}`);
      expect(this.$()).to.have.length(1);
      expect(this.$().find('select option:contains("testing")').length, 'prompt options count').to.eq(0);
      expect(this.$().find('select option').length, 'option count').to.eq(0);
    });
    it('renders options', function() {
      let options=Ember.A();
      options.push('opt1');
      options.push('opt2');
      options.push('opt3');
      this.set('options', options);
      this.render(hbs`{{techno-select-cell options=options}}`);
      expect(this.$().find('select option').length, 'option count').to.eq(3);
      expect(this.$().find('select option:contains("opt1")').length, 'option count opt1').to.eq(1);
      expect(this.$().find('select option:contains("opt2")').length, 'option count opt2').to.eq(1);
      expect(this.$().find('select option:contains("opt3")').length, 'option count opt3').to.eq(1);
    });
  }
);
