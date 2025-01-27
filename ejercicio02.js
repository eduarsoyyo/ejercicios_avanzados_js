const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Santiago',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Laura',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

let totalVolume = 0
let count = 0

// Recorremos cada usuario que tenemos con for of
for (const user of users) {
  // Ahora recorremos los sonidos favoritos de cada usuario con for in
  for (const sound in user.favoritesSounds) {
    totalVolume += user.favoritesSounds[sound].volume // Sumamos el volumen
    count++ // Contamos el número total de volúmenes
  }
}

const averageVolume = totalVolume / count // Dividimos total volumen entre el numero de volumenes para calcular la media

console.log('Media del volumen:', averageVolume)
