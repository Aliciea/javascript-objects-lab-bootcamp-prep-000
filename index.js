var object = {
  object: 'recipes',
}
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value 
  newObject = Object.assign({}, object)
  return object[key]
}