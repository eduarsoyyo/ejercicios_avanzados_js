// Versión 1 (usando for e if)
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
  return -1
}
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

console.log(findArrayIndex(mainCharacters, 'Luke')) // 0
console.log(findArrayIndex(mainCharacters, 'Han Solo')) // 2
console.log(findArrayIndex(mainCharacters, 'Rey')) // 4
console.log(findArrayIndex(mainCharacters, 'Obi-Wan')) // 6
console.log(findArrayIndex(mainCharacters, 'C-3PO')) // -1

// Versión 2 (usando indexOf)
function findArrayIndex(array, text) {
  return array.indexOf(text)
}
console.log(findArrayIndex(mainCharacters, 'Luke')) // 0
console.log(findArrayIndex(mainCharacters, 'Han Solo')) // 2
console.log(findArrayIndex(mainCharacters, 'Rey')) // 4
console.log(findArrayIndex(mainCharacters, 'Obi-Wan')) // 6
console.log(findArrayIndex(mainCharacters, 'C-3PO')) // -1

function findArrayIndex(array, text) {
  return array.indexOf(text)
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text)

  if (index !== -1) {
    array.splice(index, 1)
  }
  return array
}

console.log(removeItem(mainCharacters, 'Luke'))
console.log(removeItem(mainCharacters, 'Rey'))
console.log(removeItem(mainCharacters, 'Anakin'))
console.log(removeItem(mainCharacters, 'C-3PO'))
