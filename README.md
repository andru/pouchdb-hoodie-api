# pouchdb-hoodie-api

> PouchDB plugin that provides Hoodie's store API

[![Build Status](https://travis-ci.org/hoodiehq/pouchdb-hoodie-api.svg?branch=master)](https://travis-ci.org/hoodiehq/pouchdb-hoodie-api)
[![Coverage Status](https://coveralls.io/repos/hoodiehq/pouchdb-hoodie-api/badge.svg)](https://coveralls.io/r/hoodiehq/pouchdb-hoodie-api)
[![Dependency Status](https://david-dm.org/hoodiehq/pouchdb-hoodie-api.svg)](https://david-dm.org/hoodiehq/pouchdb-hoodie-api)
[![devDependency Status](https://david-dm.org/hoodiehq/pouchdb-hoodie-api/dev-status.svg)](https://david-dm.org/hoodiehq/pouchdb-hoodie-api#info=devDependencies)

[![NPM](https://nodei.co/npm/pouchdb-hoodie-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/pouchdb-hoodie-api/)

This plugin provides simple methods to add, find, update and remove data.

## Usage

### Initialisation

```js
var db = new PouchDB('dbname')
var api = db.hoodieApi()
```

### API

```js
// all methods return promises
api.add(object)
api.add([object1, object2])
api.find(id)
api.find(object) // with id property
api.findOrAdd(id, object)
api.findOrAdd(object)
api.findOrAdd([object1, object2])
api.findAll()
api.findAll(filterFunction)
api.update(id, changedProperties)
api.update(id, updateFunction)
api.update(object)
api.update([object1, object2])
api.updateOrAdd(id, object)
api.updateOrAdd(object)
api.updateOrAdd([object1, object2])
api.updateAll(changedProperties)
api.updateAll(updateFunction)
api.remove(id)
api.remove(object)
api.removeAll()
api.removeAll(filterFunction)
api.clear()
```

Full API documentation is yet **TO BE DONE**.

### Installation

Install via npm

```
npm install pouchdb
npm install pouchdb-hoodie-api
```

### Inlcuding the plugin

#### With browserify or on node.js/io.js

Attach this plugin to the `PouchDB` object:

```js
var PouchDB = require('pouchdb')
PouchDB(require('pouchdb-hoodie-api'))
```

#### In the browser

Include this plugin after `pouchdb.js` in your HTML page:

```html
<script src="node_modules/pouchdb/dist/pouchdb.js"></script>
<script src="node_modules/pouchdb-hoodie-api/dist/pouchdb-hoodie-api.js"></script>
```

### Modular Usage

Every method is a PouchDB plugin of its own. If you only need certain ones you can require them individually:

```js
PouchDB.plugin({
  add: require('pouchdb-hoodie-api/add')
})
```

## Testing

[![Sauce Test Status](https://saucelabs.com/browser-matrix/hoodie-pouch.svg)](https://saucelabs.com/u/hoodie-pouch)

_Test are currently not running on >IE10 and mobile Safari. This is likely an error with the setup and we would be more than happy if you'd want to fix that :)_

### In Node.js

Run all tests and validates JavaScript Code Style using [standard](https://www.npmjs.com/package/standard)

```
npm test
```

To run only the tests

```
npm run test:node
```

### In the browser

```
test:browser:local
```

This will start a local server. All tests and coverage will be run at [http://localhost:8080/__zuul](http://localhost:8080/__zuul)

## Contributing

Have a look at the Hoodie project's [contribution guidelines](https://github.com/hoodiehq/hoodie-dotfiles/blob/master/static/CONTRIBUTING.md).
If you want to hang out you can join #hoodie-pouch on our [Hoodie Community Slack](http://hood.ie/chat/).
