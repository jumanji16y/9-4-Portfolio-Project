
console.log("Pickle Rick!")

fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((characters) => {
    console.log(characters)
})
