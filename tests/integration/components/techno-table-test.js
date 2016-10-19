/* jshint expr:true */
import Ember from 'ember';
import { expect } from 'chai';
import {describeComponent,it} from 'ember-mocha';
import {describe} from 'mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('techno-table','Integration: TechnoTableComponent',
  {integration: true}, function() {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  // Template block usage:
  // this.render(hbs`
  //   {{#techno-table}}
  //     template content
  //   {{/techno-table}}
  // `);

  describe('basic layout', function() {
    it('renders empty content with basic table structure', function() {
      this.set('aList', Ember.A());
      this.set('cols', Ember.A());
      this.render(hbs`
        {{#techno-table content=aList columns=cols as |t|}}
        {{/techno-table}}
      `);
      expect(this.$().find('table').length,'table element').to.eq(1);
      expect(this.$().find('table tbody').length,'table body element').to.eq(1);
    });
    it('renders empty content with column headings', function() {
      this.set('aList', Ember.A());
      let cols = Ember.A();
      cols.push(Ember.Object.create({title: 'c1'}));
      cols.push(Ember.Object.create({title: 'c2'}));
      this.set('cols', cols);
      this.render(hbs`
        {{#techno-table content=aList columns=cols as |t|}}
        {{/techno-table}}
      `);
      expect(this.$().find('table').length,'table element').to.eq(1);
      expect(this.$().find('table thead tr th').length,'column heading count').to.eq(2);
      expect(this.$().find('table thead tr').text().replace(/\s/g,''),'column heading text').to.eq('c1c2');
      expect(this.$().find('table thead tr th:contains("c1")').length,'column c1 heading count').to.eq(1);
    });
    it('renders empty content with column classes', function() {
      this.set('aList', Ember.A());
      let cols = Ember.A();
      cols.push(Ember.Object.create({title: 'c1', headingClass: 'c1', bodyClass: 'c1b'}));
      cols.push(Ember.Object.create({title: 'c2', headingClass: 'c2', bodyClass: 'c2b'}));
      this.set('cols', cols);
      this.render(hbs`
        {{#techno-table content=aList columns=cols as |t|}}
        {{/techno-table}}
      `);
      expect(this.$().find('table').length,'table element').to.eq(1);
      expect(this.$().find('table thead tr th').length,'column heading count').to.eq(2);
      expect(this.$().find('table thead tr th.c1:contains("c1")').length,'column c1 heading count').to.eq(1);
      expect(this.$().find('table thead tr th.c2:contains("c2")').length,'column c2 heading count').to.eq(1);
    });
    it('renders empty content with default column classes', function() {
      this.set('aList', Ember.A());
      let cols = Ember.A();
      cols.push(Ember.Object.create({title: 'c1', name: 'c1'}));
      cols.push(Ember.Object.create({title: 'c2', name: 'c2'}));
      this.set('cols', cols);
      this.render(hbs`
        {{#techno-table content=aList columns=cols as |t|}}
        {{/techno-table}}
      `);
      expect(this.$().find('table').length,'table element').to.eq(1);
      expect(this.$().find('table thead tr th').length,'column heading count').to.eq(2);
      expect(this.$().find('table thead tr th.c1:contains("c1")').length,'column c1 heading count').to.eq(1);
      expect(this.$().find('table thead tr th.c2:contains("c2")').length,'column c2 heading count').to.eq(1);
    });
    it('renders basic content with default column classes', function() {
      let cols = Ember.A();
      cols.push(Ember.Object.create({title: 'c1', name: 'c1'}));
      cols.push(Ember.Object.create({title: 'c2', name: 'c2'}));
      this.set('cols', cols);
      let objs = Ember.A();
      objs.push(Ember.Object.create({c1:'testC1', c2:'testC2'}));
      this.set('objs',objs);
      this.render(hbs`
        {{#techno-table content=objs columns=cols as |t|}}
        {{/techno-table}}
      `);
      // console.log('@@@@ Table: ',this.$().find('table').html());
      expect(this.$().find('table').length,'table element').to.eq(1);
      expect(this.$().find('table thead tr th').length,'column heading count').to.eq(2);
      expect(this.$().find('table thead tr th.c1:contains("c1")').length,'column c1 heading count').to.eq(1);
      expect(this.$().find('table thead tr th.c2:contains("c2")').length,'column c2 heading count').to.eq(1);
      expect(this.$().find('table tbody tr td').length,'column body count').to.eq(2);
      expect(this.$().find('table tbody tr td.c1:contains("testC1")').length,'column c1 body count').to.eq(1);
      expect(this.$().find('table tbody tr td.c2:contains("testC2")').length,'column c2 body count').to.eq(1);
    });
  });
  describe('binding to content', function() {
    it('updates the content when the bound objects change', function() {
      let cols = Ember.A();
      cols.push(Ember.Object.create({title: 'c1', name: 'c1'}));
      cols.push(Ember.Object.create({title: 'c2', name: 'c2'}));
      this.set('cols', cols);
      let objs = Ember.A();
      let obj = Ember.Object.create({c1:'testC1', c2:'testC2'});
      objs.push(obj);
      this.set('objs',objs);
      this.render(hbs`
        {{#techno-table content=objs columns=cols as |t|}}
        {{/techno-table}}
      `);
      // console.log('@@@@ Table: ',this.$().find('table').html());
      expect(this.$().find('table tbody tr td.c1:contains("testC1")').length,'column c1 body count').to.eq(1);
      expect(this.$().find('table tbody tr td.c2:contains("testC2")').length,'column c2 body count').to.eq(1);
      Ember.run(function() {
        obj.set('c1', 'updateC1');
      });
      expect(obj.get('c1'),'c1 of obj').to.eq('updateC1');
      expect(this.$().find('table tbody tr td.c1:contains("updateC1")').length,'column c1 updated body count').to.eq(1);
    });
  });
});
