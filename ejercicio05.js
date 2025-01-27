function rollDice(numFaces) {
  return Math.floor(Math.random() * numFaces) + 1
}

// Ejemplos de uso:
console.log(rollDice(6)) // Simulación de un dado de 6 caras (valores de 1 a 6)
console.log(rollDice(20)) // Simulación de un dado de 20 caras (valores de 1 a 20)
