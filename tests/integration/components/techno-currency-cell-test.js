/* jshint expr:true */

import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('techno-currency-cell', 'Integration: TechnoCurrencyCellComponent',
  { integration: true }, function() {
    it('renders US dollars', function() {
      this.set('value', 1900.00);
      this.render(hbs`{{techno-currency-cell value=value currency="USD"}}`);
      expect(this.$()).to.have.length(1);
      expect(this.$().find('td:contains("$1,900.00")'));
    });
  }
);
