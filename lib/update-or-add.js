'use strict'

var toId = require('./utils/to-id')
var addOne = require('./utils/add-one')
var updateOne = require('./utils/update-one')
var addMany = require('./utils/add-many')
var updateMany = require('./utils/update-many')

module.exports = function updateOrAdd (idOrObjectOrArray, newObject) {
  var state = {
    db: this.db,
    Promise: this.PouchDB.utils.Promise,
    errors: this.PouchDB.Errors
  }
  var isArray = Array.isArray(idOrObjectOrArray)

  return isArray ? updateOrAddMany(state, idOrObjectOrArray) : updateOrAddOne(state, idOrObjectOrArray, newObject)
}

function updateOrAddMany (state, passedObjects) {
  var addedObjects
  var passedObjectIds = passedObjects.map(toId)

  return addMany(state, passedObjects)

  .then(function (_addedObjectsAndErrors) {
    addedObjects = _addedObjectsAndErrors
    var conflicting = passedObjects.reduce(function (array, passedObject, i) {
      var objectOrError = _addedObjectsAndErrors[i]
      var isConflictError = objectOrError instanceof Error && objectOrError.status === 409

      if (isConflictError) {
        array.push(passedObject)
      }
      return array
    }, [])

    return updateMany(state, conflicting)
  })

  .then(function (updatedObjects) {
    var objects = []

    updatedObjects.concat(addedObjects).forEach(function (object) {
      var index = passedObjectIds.indexOf(object.id)
      if (index !== -1) objects[index] = object
    })

    return objects
  })
}

function updateOrAddOne (state, idOrObject, newObject) {
  return updateOne(state, idOrObject, newObject)

  .catch(function (error) {
    if (error.status !== 404) throw error

    if (newObject) {
      newObject.id = toId(idOrObject)
      return addOne(state, newObject)
    }

    return addOne(state, idOrObject)
  })
}
