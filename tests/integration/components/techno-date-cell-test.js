/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'techno-date-cell',
  'Integration: TechnoDateCellComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      this.set('date', new Date("1/1/1925"));
      this.render(hbs`{{techno-date-cell value=date}}`);
      expect(this.$()).to.have.length(1);
      expect(this.$().find('td')).to.have.length(1);
      expect(this.$().find('td:contains("1/1/1925")')).to.have.length(1);
    });
  }
);
