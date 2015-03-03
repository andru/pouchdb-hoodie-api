# pouchdb-hoodie-api

> PouchDB plugin that provides Hoodie's store API

[![Build Status](https://travis-ci.org/boennemann/pouchdb-hoodie-api.svg?branch=master)](https://travis-ci.org/boennemann/pouchdb-hoodie-api)
[![Dependency Status](https://david-dm.org/boennemann/pouchdb-hoodie-api.svg)](https://david-dm.org/boennemann/pouchdb-hoodie-api)
[![NPM](https://nodei.co/npm/pouchdb-hoodie-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/pouchdb-hoodie-api/)

This plugin provides simple methods to add, find, update and remove data.

## Usage

```js
var db = new PouchDB('dbname');

// all methods return promises
db.objects.add(object)
db.objects.add([object1, object2])
db.objects.find(id)
db.objects.find(object) // with id property
db.objects.findOrAdd(id, object)
db.objects.findOrAdd(object)
db.objects.findOrAdd([object1, object2])
db.objects.findAll()
db.objects.findAll(filterFunction)
db.objects.update(id, changedProperties)
db.objects.update(id, updateFunction)
db.objects.update(object)
db.objects.update([object1, object2])
db.objects.updateOrAdd(id, object)
db.objects.updateOrAdd(object)
db.objects.updateOrAdd([object1, object2])
db.objects.updateAll(changedProperties)
db.objects.updateAll(updateFunction)
db.objects.remove(id)
db.objects.remove(object)
db.objects.removeAll()
db.objects.removeAll(filterFunction)
db.objects.clear()
```

Find the full API documentation at **TO BE DONE**


## Installation

### In the browser

To use this plugin, include it after `pouchdb.js` in your HTML page:

```html
<script src="pouchdb.js"></script>
<script src="pouchdb.db-api.js"></script>
```

This plugin is also available from Bower:

```
bower install pouchdb-hoodie-api
```

### In Node.js

Install via npm

```
npm install pouchdb-hoodie-api
```

And then attach it to the `PouchDB` object

```js
var PouchDB = require('pouchdb');
require('pouchdb-hoodie-api')(PouchDB);
```


## Testing

[![Coverage Status](https://coveralls.io/repos/boennemann/pouchdb-hoodie-api/badge.svg)](https://coveralls.io/r/boennemann/pouchdb-hoodie-api)
[![devDependency Status](https://david-dm.org/boennemann/pouchdb-hoodie-api/dev-status.svg)](https://david-dm.org/boennemann/pouchdb-hoodie-api#info=devDependencies)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/db-pouch.svg)](https://saucelabs.com/u/db-pouch)

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

This will start a local server. All tests and coverage will be run at http://localhost:8080/__zuul
