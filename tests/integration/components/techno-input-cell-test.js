/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'techno-input-cell',
  'Integration: TechnoInputCellComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#techno-input-cell}}
      //     template content
      //   {{/techno-input-cell}}
      // `);

      this.render(hbs`{{techno-input-cell}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
