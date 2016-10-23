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
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#techno-date-cell}}
      //     template content
      //   {{/techno-date-cell}}
      // `);

      this.render(hbs`{{techno-date-cell}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
