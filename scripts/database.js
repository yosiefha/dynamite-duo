export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Denim Venim",
            power: "Venomous pants"
        },
        {
            id: 2,
            name: "Undertaker",
            power: "Destructive burrowing"
        },
        {
            id: 3,
            name: "Sally",
            power: "Sarcasm"
        }
    ]
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}