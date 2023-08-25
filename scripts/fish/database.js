/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {   
            id:1,
            image:"./pixelShark.png",
            species:"shark",
            name: "Jaws",
            food: "fish",
            length:72,
            location: "Atlantic Ocean",
            cleaningId: 1,
            
        }
        ,
        {   
            id:2,
            image:"./mantaRay.jpeg",
            species:"mantaRay",
            name: "Ray",
            food: "plankton",
            length:10,
            location:"Pacific Ocean",
            cleaningId: 2,
            
        }
        ,
        {   
            id:3,
            image:"./starFish.png",
            species:"star fish",
            name: "starry",
            food: "amollusks",
            length:5,
            location:"Tropical Waters",
            cleaningId: 3,
            
        }
        ,
        {   
            id:4,
            image:"./angler.png",
            species:"angler",
            name: "angley",
            food: "",
            length:13,
            location:"Tropical Waters",
            cleaningId: 1,
            
        }
        ,
        {   
            id:5,
            image:"./crab.png",
            species:"star fish",
            name: "starry",
            food: "amollusks",
            length:4,
            location:"Tropical Waters",
            cleaningId: 2,
            
        }
        ,
        {   
            id:6,
            image:"./eels.png",
            species:"eel",
            name: "eely",
            food: "amollusks",
            length:18,
            location:"Tropical Waters",
            cleaningId: 3,
           
        }
        ,
        {   
            id:7,
            image:"./fightingFish.jpg",
            species:"Figthing Fish",
            name: "Fighty",
            food: "Fish Flakes",
            length:2,
            location:"Tropical Waters",
            cleaningId: 1,
            
        }
        ,
        {   
            id:8,
            image:"./orca.png",
            species:"star fish",
            name: "Orcy",
            food: "Other marine life",
            length:144,
            location:"Ocean",
            cleaningId: 2
            
        }
    ]
    ,

careItems:[

    {
        id:1,
        cleaning:"Monthly",
        filter:"Bi-Weekly",
        testPH:"after every cleaning",
        waterType:"Neutral"

    }
    ,
    {
        id:2,
        cleaning:"Bi-weekly",
        filter:"Weekly",
        testPH:"after every cleaning",
        waterType:"Salt"
        
    }
    ,
    {
        id:3,
        cleaning:"Bi-Monthly",
        filter:"Monthly",
        testPH:"no need",
        waterType:"Fresh"
    }
    
]
,
locations:[
{
    id:1,
    locationName:"Random Name 1",
    dateVisited:"Radome Date 1",
    latitude:"Random Lat 1",
    longitude:"Radom Long 1",
    climate:"Radom Climate 1"
}
,
{
    id:2,
    locationName:"Random Name 2",
    dateVisited:"Radome Date 2",
    latitude:"Random Lat 2",
    longitude:"Radom Long 2",
    climate:"Radom Climate 2"
}
,
{
    id:3,
    locationName:"Random Name 3",
    dateVisited:"Random Date 3",
    latitude:"Randome Lat 3",
    longitude:"Random Long 3",
    climate:"Random Climate 3"
}

]

}


export const allData = (careID) => {

    

    const allDatabase = database

    

    const infoResults = []

    for (const fish of allDatabase.fish){
        

    if (fish.cleaningId === careID){
        for (const careItem of allDatabase.careItems){
            
        if (careItem.id === careID){

             infoResults.push(careItem)
        }
    }
    }
}

return infoResults
        
}

























export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips =() => {

    return database.careItems.map(careItems => ({...careItems}))
}

export const getLocation = () => {

    return database.locations.map(locations => ({...locations}))
}