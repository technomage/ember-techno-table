/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'techno-table-title',
  'Integration: TechnoTableTitleComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#techno-table-title}}
      //     template content
      //   {{/techno-table-title}}
      // `);

      this.render(hbs`{{techno-table-title}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
