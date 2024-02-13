import { Pokemon } from "./pokemon" // on importe ici le modele 

export const POKEMONS: Pokemon[] = [ // et là on à la seed
    {
        id: 1,
        name: "Bulbizarre",
        hp: 25,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        types: ["Plante", "Poison"],
        created: new Date()
    },
    {
        id: 2,
        name: "Salamèche",
        hp: 28,
        cp: 6,
        picture: "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/800px-Salam%C3%A8che-RFVF.png",
        types: ["Feu"],
        created: new Date()
    },
    {
        id: 3,
        name: "Carapuce",
        hp: 21,
        cp: 4,
        picture: "https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/800px-Carapuce-RFVF.png",
        types: ["Eau"],
        created: new Date()
    },
    {
        id: 4,
        name: "Aspicot",
        hp: 16,
        cp: 2,
        picture: "https://www.pokepedia.fr/images/9/9b/Aspicot-RFVF.png",
        types: ["Plante", "Poison"],
        created: new Date()
    },
    {
        id: 5,
        name: "Roucool",
        hp: 30,
        cp: 7,
        picture: "https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/250px-Roucool-RFVF.png",
        types: ["Normal", "Vol"],
        created: new Date()
    },
    {
        id: 6,
        name: "Rattata",
        hp: 18,
        cp: 6,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
        types: ["Normal"],
        created: new Date()
    },
    {
        id: 7,
        name: "Piafabec",
        hp: 14,
        cp: 5,
        picture: "https://www.pokepedia.fr/images/thumb/7/7d/Piafabec-RFVF.png/800px-Piafabec-RFVF.png",
        types: ["Normal", "Vol"],
        created: new Date()
    },
    {
        id: 8,
        name: "Abo",
        hp: 16,
        cp: 4,
        picture: "https://www.pokepedia.fr/images/thumb/5/56/Abo-RFVF.png/800px-Abo-RFVF.png",
        types: ["Poison"],
        created: new Date()
    },
    {
        id: 9,
        name: "Pikachu",
        hp: 21,
        cp: 7,
        picture: "https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/800px-Pikachu-DEPS.png",
        types: ["Electrik"],
        created: new Date()
    },
    {
        id: 10,
        name: "Sabelette",
        hp: 19,
        cp: 3,
        picture: "https://www.pokepedia.fr/images/thumb/6/66/Sabelette-RFVF.png/800px-Sabelette-RFVF.png",
        types: ["Normal"],
        created: new Date()
    },
    {
        id: 11,
        name: "Mélofée",
        hp: 25,
        cp: 5,
        picture: "https://www.pokepedia.fr/images/thumb/4/4d/M%C3%A9lof%C3%A9e-RFVF.png/250px-M%C3%A9lof%C3%A9e-RFVF.png",
        types: ["Fée"],
        created: new Date()
    },
    {
        id: 12,
        name: "Goupix",
        hp: 17,
        cp: 8,
        picture: "https://www.pokepedia.fr/images/thumb/f/f6/Goupix-RFVF.png/800px-Goupix-RFVF.png",
        types: ["Feu"],
        created: new Date()
    },
]