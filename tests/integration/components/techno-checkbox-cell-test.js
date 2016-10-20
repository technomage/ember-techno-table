/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'techno-checkbox-cell',
  'Integration: TechnoCheckboxCellComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#checkbox-cell}}
      //     template content
      //   {{/checkbox-cell}}
      // `);

      this.render(hbs`{{techno-checkbox-cell}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
