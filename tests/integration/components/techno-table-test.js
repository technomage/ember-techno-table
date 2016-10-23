/* jshint expr:true */
import Ember from 'ember';
import { expect } from 'chai';
import {describeComponent,it} from 'ember-mocha';
import {describe} from 'mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('techno-table','Integration: TechnoTableComponent',
  {integration: true}, function() {
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
    it('renders basic content with multiple objects', function() {
      let cols = Ember.A();
      cols.push(Ember.Object.create({title: 'c1', name: 'c1'}));
      cols.push(Ember.Object.create({title: 'c2', name: 'c2'}));
      this.set('cols', cols);
      let objs = Ember.A();
      for (let i=0; i<10; i++) {
        objs.push(Ember.Object.create({c1:`testC1-${i}`, c2:`testC2-${i}`}));
      }
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
      expect(this.$().find('table tbody tr td').length,'column body count').to.eq(20);
      expect(this.$().find('table tbody tr td.c1:contains("testC1")').length,'column c1 body count').to.eq(10);
      expect(this.$().find('table tbody tr td.c2:contains("testC2")').length,'column c2 body count').to.eq(10);
      for (let i=0; i<10; i++) {
        expect(this.$().find(`table tbody tr td.c1:contains("testC1-${i}")`).length,'column c1 body count').to.eq(1);
        expect(this.$().find(`table tbody tr td.c2:contains("testC2-${i}")`).length,'column c2 body count').to.eq(1);
      }
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
    it('updates the object on editable text cell change in value');
    it('updates the editable text cell when the bound object changes');
    it('updates the object on check box cell change in state');
    it('updates the check box cell when the bound object changes', function() {
      let cols = Ember.A();
      cols.push(Ember.Object.create({title: 'c1', name: 'c1', bodyComponent: 'techno-checkbox-cell'}));
      cols.push(Ember.Object.create({title: 'c2', name: 'c2', bodyComponent: 'techno-text-cell'}));
      this.set('cols', cols);
      let objs = Ember.A();
      let obj = Ember.Object.create({c1:true, c2:'testC2'});
      objs.push(obj);
      this.set('objs',objs);
      this.render(hbs`
        {{#techno-table content=objs columns=cols as |t|}}
        {{/techno-table}}
      `);
      // console.log('@@@@ Table: ',this.$().find('table').html());
      expect(this.$().find('table').length,'table element').to.eq(1);
      expect(this.$().find('table tbody tr td').length,'column body count').to.eq(2);
      expect(this.$().find('table tbody tr td.c1 input[type="checkbox"]:checked').length,'column c1 body count').to.eq(1);
      expect(this.$().find('table tbody tr td.c2:contains("testC2")').length,'column c2 body count').to.eq(1);
      //
      Ember.run(function() {
        obj.set('c1', false);
      });
      //
      expect(this.$().find('table tbody tr td.c1 input[type="checkbox"]:checked').length,'column c1 checked body count').to.eq(0);
      expect(this.$().find('table tbody tr td.c1 input[type="checkbox"]:not(:checked)').length,'column c1 unchecked body count').to.eq(1);
    });
    it('updates the object on tag list change (click to remove tag)');
    it('updates the object on tag list change (add tag via dropdown)');
    it('updates the tag list cell when the bound object changes');
    it('updates the tag list cell when the bound object changes');
    it('updates the object on select value change');
    it('updates the select cell when the bound object changes');
    it('updates the object on multi-value select change');
    it('updates the multi-value select cell when the bound object changes');
    it('updates the object on association target change (remove target)');
    it('updates the object on association target change (add target)');
    it('updates the association cell when the bound object changes');
  });
  describe('cell components', function() {
    it('can display a cell as static text', function() {
      let cols = Ember.A();
      cols.push(Ember.Object.create({title: 'c1', name: 'c1', bodyComponent: 'techno-text-cell'}));
      cols.push(Ember.Object.create({title: 'c2', name: 'c2', bodyComponent: 'techno-text-cell'}));
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
      expect(this.$().find('table tbody tr td').length,'column body count').to.eq(2);
      expect(this.$().find('table tbody tr td.c1:contains("testC1")').length,'column c1 body count').to.eq(1);
      expect(this.$().find('table tbody tr td.c2:contains("testC2")').length,'column c2 body count').to.eq(1);
    });
    it('can display a cell as editable text', function() {
      let cols = Ember.A();
      cols.push(Ember.Object.create({title: 'c1', name: 'c1', bodyComponent: 'techno-input-cell'}));
      cols.push(Ember.Object.create({title: 'c2', name: 'c2', bodyComponent: 'techno-text-cell'}));
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
      expect(this.$().find('table tbody tr td').length,'column body count').to.eq(2);
      let inputs = this.$().find("table tbody tr td.c1 input");
      expect(inputs.length,'column c1 input count').to.eq(1);
      expect(inputs.val(),'column c1 input value').to.eq('testC1');
      expect(this.$().find('table tbody tr td.c2:contains("testC2")').length,'column c2 body count').to.eq(1);
    });
    it('can display a cell as a check box', function() {
      let cols = Ember.A();
      cols.push(Ember.Object.create({title: 'c1', name: 'c1', bodyComponent: 'techno-checkbox-cell'}));
      cols.push(Ember.Object.create({title: 'c2', name: 'c2', bodyComponent: 'techno-text-cell'}));
      this.set('cols', cols);
      let objs = Ember.A();
      let obj = Ember.Object.create({c1:true, c2:'testC2'});
      objs.push(obj);
      this.set('objs',objs);
      this.render(hbs`
        {{#techno-table content=objs columns=cols as |t|}}
        {{/techno-table}}
      `);
      // console.log('@@@@ Table: ',this.$().find('table').html());
      expect(this.$().find('table').length,'table element').to.eq(1);
      expect(this.$().find('table tbody tr td').length,'column body count').to.eq(2);
      expect(this.$().find('table tbody tr td.c1 input[type="checkbox"]:checked').length,'column c1 body count').to.eq(1);
      expect(this.$().find('table tbody tr td.c2:contains("testC2")').length,'column c2 body count').to.eq(1);
      //
      Ember.run(function() {
        obj.set('c1', false);
      });
      //
      expect(this.$().find('table tbody tr td.c1 input[type="checkbox"]:checked').length,'column c1 checked body count').to.eq(0);
      expect(this.$().find('table tbody tr td.c1 input[type="checkbox"]:not(:checked)').length,'column c1 unchecked body count').to.eq(1);
    });
    it('can display a cell as a list of tags');
    it('can display a cell as a select', function() {
      let cols = Ember.A();
      cols.push(Ember.Object.create({title: 'c1', name: 'c1', bodyComponent: 'techno-text-cell'}));
      cols.push(Ember.Object.create({title: 'c2', name: 'c2', bodyComponent: 'techno-select-cell'}));
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
      expect(this.$().find('table tbody tr td').length,'column body count').to.eq(2);
      expect(this.$().find('table tbody tr td.c1:contains("testC1")').length,'column c1 body count').to.eq(1);
      expect(this.$().find('table tbody tr td.c2 div.select-picker').length,'column c2 body count').to.eq(1);
    });
    it('can display a cell as a multi-value select', function() {
      let cols = Ember.A();
      cols.push(Ember.Object.create({title: 'c1', name: 'c1', bodyComponent: 'techno-text-cell'}));
      cols.push(Ember.Object.create({title: 'c2', name: 'c2', bodyComponent: 'techno-select-cell', multiple: true}));
      this.set('cols', cols);
      let objs = Ember.A();
      objs.push(Ember.Object.create({c1:'testC1', c2:['testC2']}));
      this.set('objs',objs);
      this.render(hbs`
        {{#techno-table content=objs columns=cols as |t|}}
        {{/techno-table}}
      `);
      // console.log('@@@@ Table: ',this.$().find('table').html());
      expect(this.$().find('table').length,'table element').to.eq(1);
      expect(this.$().find('table tbody tr td').length,'column body count').to.eq(2);
      expect(this.$().find('table tbody tr td.c1:contains("testC1")').length,'column c1 body count').to.eq(1);
      expect(this.$().find('table tbody tr td.c2 div.select-picker').length,'column c2 body count').to.eq(1);
    });
    it('can display a cell as an association');
    it('can display a cell as a formatted date', function() {
      let cols = Ember.A();
      cols.push(Ember.Object.create({title: 'c1', name: 'c1', bodyComponent: 'techno-date-cell'}));
      cols.push(Ember.Object.create({title: 'c2', name: 'c2', bodyComponent: 'techno-text-cell'}));
      this.set('cols', cols);
      let objs = Ember.A();
      let date = new Date('3/5/2016');
      objs.push(Ember.Object.create({c1:date, c2:'testC2'}));
      this.set('objs',objs);
      this.render(hbs`
        {{#techno-table content=objs columns=cols as |t|}}
        {{/techno-table}}
      `);
      // console.log('@@@@ Table: ',this.$().find('table').html());
      expect(this.$().find('table').length,'table element').to.eq(1);
      expect(this.$().find('table tbody tr td').length,'column body count').to.eq(2);
      expect(this.$().find('table tbody tr td.c1:contains("3/5/2016")').length,'column c1 body count').to.eq(1);
      expect(this.$().find('table tbody tr td.c2:contains("testC2")').length,'column c2 body count').to.eq(1);
    });
    it('can display a cell as a date with picker');
    it('can display a cell as a formatted number');
    it('can display a cell as a formatted currency value');
  });
  describe('formatting', function() {
    it('uses bootstrap classes in layout', function() {
      let cols = Ember.A();
      cols.push(Ember.Object.create({title: 'c1', name: 'c1'}));
      cols.push(Ember.Object.create({title: 'c2', name: 'c2'}));
      this.set('cols', cols);
      let objs = Ember.A();
      for (let i=0; i<10; i++) {
        objs.push(Ember.Object.create({c1:`testC1-${i}`, c2:`testC2-${i}`}));
      }
      this.set('objs',objs);
      this.render(hbs`
        {{#techno-table content=objs columns=cols as |t|}}
        {{/techno-table}}
      `);
      // console.log('@@@@ Table: ',this.$().find('table').html());
      expect(this.$().find('table.table'),'bootstrap styled table').to.have.length(1);
    });
  });
  describe('actions', function() {
    it('shows table level actions to create new rows when enabled');
    it('hides table level actions to create new rows when not enabled');
    it('shows edit actions on rows that are editable by the current user');
    it('hides edit actions on rows that are not ediable by the current user');
    it('shows custom actions on rows where supplied');
    it('disables custom actions on rows where supplied but not available for a row');
  });
});
