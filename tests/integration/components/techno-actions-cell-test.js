/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'techno-actions-cell',
  'Integration: TechnoActionsCellComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#techno-actions-cell}}
      //     template content
      //   {{/techno-actions-cell}}
      // `);

      this.render(hbs`{{techno-actions-cell}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
