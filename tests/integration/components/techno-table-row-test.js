/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'techno-table-row',
  'Integration: TechnoTableRowComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#techno-table-row}}
      //     template content
      //   {{/techno-table-row}}
      // `);

      this.render(hbs`{{techno-table-row}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
