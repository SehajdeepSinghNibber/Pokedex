async function searchPokemon(){

    const input = document.getElementById("search").value.toLowerCase()

    try{

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)

        const data = await response.json()

        const name = data.name
        const number = data.id
        const image = data.sprites.front_default

// types
        const types = data.types.map(t => t.type.name)

// weaknesses
        let weaknesses = new Set()

        for(let t of data.types){

            const typeRes = await fetch(t.type.url)
            const typeData = await typeRes.json()

            typeData.damage_relations.double_damage_from.forEach(w=>{
                weaknesses.add(w.name)
            })

        }

        document.getElementById("pokemonImg").src = image
        document.getElementById("pokemonName").innerText = name.toUpperCase()
        document.getElementById("pokemonNumber").innerText = "Pokedex #: " + number
        document.getElementById("pokemonTypes").innerText = "Type: " + types.join(", ")
        document.getElementById("pokemonWeakness").innerText = "Weakness: " + [...weaknesses].join(", ")

    }

    catch{

        alert("Pokemon not found")

    }

}