# Ember-techno-table

ember-techno-table provides a table component for Ember 2.x.  The component is
designed to be used within model specific components that define things like
columns and associations.  The component is designed to allow associations to be
shown in a column and then "expanded" into a nested table.  A row can also be
"expanded" into an edit form for in-line editing of contents.

This component is NOT intended for large tables of flat objects, there are less
complex and higher performing components for that use case.  This is targeted at
highly related object models where showing paginated contents limit performance
concerns in the name of flexibility.

The component supports the following features:

* Sorting
* Filtering
* Pagination
* Column ordering and hiding
* Customizable components for cells
* Expansion of cell into nested component
* Expansion of row into nested component
* Customizable set of commands per row

## Examples

See examples at XXX

## Usage

Typically techno-table is enclosed within a class
specific component, allowing class related configurations
to be defined in that template, and then consumed
in an application with a clean interface.

The t.title component defines where the title is placed
and automatically adds controls following the enclosed content.

Following the enclosed content, techno-table renders the column headers
and body content based on the columns and content arguments.

The editComponent argument defines the component that will be used for editing
a row, and createComponent will be used to create a new object when showCreate
is true.  The createComponent is made visible when the createAction is invoked
by the contained block and an unsaved new object provided as the argument to the
action.

```javascript
actions: {
  showCreate: function(act) {
    act(newObj);
  }
}
```

```handlebars
{{#techno-table content=objects columns=columns
  createComponent="row-edit" as |t|}}
  <h3>
    {{#t.title}}Techno <a {{action 'showCreate' t.createAction}}{{/t.title}}
    {{#t.tableMenu}}{{/t.tableMenu}}
  </h3>
{{/techno-table}}
```

When using techno-table the list of columns is used to build
the table level menu attached to the table as a whole.  This
menu allows the columns to be shown/hidden and to take table
level actions such as unlinking from an enclosing object, or
adding an object to the association represented by the table.
The t.tableMenu component is used to position this menu and any
enclosed content will be appended to the standard content of the
menu.

Columns that represent related objects are able to "expand" into
a nested table.  This nesting requires the column know what
table component is appropriate for the type of object that should
be shown in the table.  The column must also define the relationship
used to add/remove objects from that column, and the inverse
relationship.  When a column is expanded into a nested table the
required metadata is provided by the column definition from the
enclosing table.

All columns have a defined display component, and an adapter that
extracts and formats the data for the selected column.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
