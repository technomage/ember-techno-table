/* jshint expr:true */
import Ember from 'ember';
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('techno-select-cell', 'Integration: TechnoSelectCellComponent',
  {integration: true},function() {
  it('renders with prompt', function() {
    this.render(hbs`{{techno-select-cell prompt='testing'}}`);
    // console.log('@@@@ Cell: ',this.$().find('td').html());
    expect(this.$()).to.have.length(1);
    expect(this.$().find('div.select-picker li:contains("testing")').length, 'prompt options count').to.eq(1);
  });
  it('renders with prompt from spec', function() {
    this.set('spec', Ember.Object.create({
      prompt: 'testing'
    }));
    this.render(hbs`{{techno-select-cell spec=spec}}`);
    // console.log('@@@@ Cell: ',this.$().find('td').html());
    expect(this.$()).to.have.length(1);
    expect(this.$().find('div.select-picker li:contains("testing")'), 'prompt options count').to.have.length(1);
  });
  it('renders without prompt', function() {
    this.render(hbs`{{techno-select-cell}}`);
    // console.log('@@@@ Cell: ',this.$().find('td').html());
    expect(this.$().find('div.select-picker li:contains("testing")'), 'prompt options count').to.have.length(0);
    expect(this.$().find('div.select-picker li[role="presentation"]'), 'option count with prompt place holder').to.have.length(0);
  });
  it('renders without prompt from spec', function() {
    this.set('spec', Ember.Object.create({
    }));
    this.render(hbs`{{techno-select-cell spec=spec}}`);
    // console.log('@@@@ Cell: ',this.$().find('td').html());
    expect(this.$().find('div.select-picker li:contains("testing")'), 'prompt options count').to.have.length(0);
    expect(this.$().find('div.select-picker li[role="presentation"]'), 'option count with prompt place holder').to.have.length(0);
  });
  it('renders options', function() {
    let options=Ember.A();
    options.push('opt1');
    options.push('opt2');
    options.push('opt3');
    this.set('options', options);
    this.render(hbs`{{techno-select-cell options=options}}`);
    expect(this.$().find('div.select-picker li[role="presentation"]'), 'option count including prompt placeholder').to.have.length(3);
    expect(this.$().find('div.select-picker li[role="presentation"]:contains("opt1")'), 'option count opt1').to.have.length(1);
    expect(this.$().find('div.select-picker li[role="presentation"]:contains("opt2")'), 'option count opt2').to.have.length(1);
    expect(this.$().find('div.select-picker li[role="presentation"]:contains("opt3")'), 'option count opt3').to.have.length(1);
  });
  it('renders options from spec', function() {
    let spec = Ember.Object.create({
    });
    let options=Ember.A();
    options.push('opt1');
    options.push('opt2');
    options.push('opt3');
    spec.set('options', options);
    this.set('spec', spec);
    this.render(hbs`{{techno-select-cell spec=spec}}`);
    expect(this.$().find('div.select-picker li[role="presentation"]'), 'option count including prompt placeholder').to.have.length(3);
    expect(this.$().find('div.select-picker li[role="presentation"]:contains("opt1")'), 'option count opt1').to.have.length(1);
    expect(this.$().find('div.select-picker li[role="presentation"]:contains("opt2")'), 'option count opt2').to.have.length(1);
    expect(this.$().find('div.select-picker li[role="presentation"]:contains("opt3")'), 'option count opt3').to.have.length(1);
  });
  it('renders options with labels', function() {
    let options=Ember.A();
    options.push(Ember.Object.create({name:'opt1',label:'Option 1'}));
    options.push(Ember.Object.create({name:'opt2',label:'Option 2'}));
    options.push(Ember.Object.create({name:'opt3',label:'Option 3'}));
    this.set('options', options);
    this.set('valuePath', 'content.name');
    this.set('labelPath', 'content.label');
    this.render(hbs`{{techno-select-cell options=options valuePath=valuePath labelPath=labelPath}}`);
    // console.log('@@@@ Cell: ',this.$().find('td').html());
    expect(this.$().find('div.select-picker li[role="presentation"]'), 'option count').to.have.length(3);
    expect(this.$().find('div.select-picker li[role="presentation"] a[data-itemid="0"]:contains("Option 1")'), 'option count opt1').to.have.length(1);
    expect(this.$().find('div.select-picker li[role="presentation"] a[data-itemid="1"]:contains("Option 2")'), 'option count opt2').to.have.length(1);
    expect(this.$().find('div.select-picker li[role="presentation"] a[data-itemid="2"]:contains("Option 3")'), 'option count opt3').to.have.length(1);
  });
  it('renders options with labels from spec', function() {
    let spec = Ember.Object.create({
    });
    let options=Ember.A();
    options.push(Ember.Object.create({name:'opt1',label:'Option 1'}));
    options.push(Ember.Object.create({name:'opt2',label:'Option 2'}));
    options.push(Ember.Object.create({name:'opt3',label:'Option 3'}));
    spec.set('options', options);
    this.set('spec', spec);
    spec.set('valuePath', 'name');
    spec.set('labelPath', 'label');
    this.render(hbs`{{techno-select-cell spec=spec}}`);
    // console.log('@@@@ Cell: ',this.$().find('td').html());
    expect(this.$().find('div.select-picker li[role="presentation"]'), 'option count').to.have.length(3);
    expect(this.$().find('div.select-picker li[role="presentation"] a[data-itemid="0"]:contains("Option 1")'), 'option count opt1').to.have.length(1);
    expect(this.$().find('div.select-picker li[role="presentation"] a[data-itemid="1"]:contains("Option 2")'), 'option count opt2').to.have.length(1);
    expect(this.$().find('div.select-picker li[role="presentation"] a[data-itemid="2"]:contains("Option 3")'), 'option count opt3').to.have.length(1);
  });
});
