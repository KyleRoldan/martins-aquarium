
// Import the function that returns a copy of the fish array
import { getFish} from './database.js'
import {getTips, allData} from './database.js'




export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holiestFish = []
    const fishes = getFish()

    for (const holyFish of fishes ) {
        if (holyFish.length % 3 === 0){
            holiestFish.push(holyFish)
        }

        

    }

    return holiestFish
}

export const kindaHolyFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldierFish = []
    const fishes = getFish()

    for (const soldiers of fishes ) {
        if (soldiers.length % 5 === 0){
            soldierFish.push(soldiers)
        }

    }
    return soldierFish
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []
    const fishes = getFish()

    for (const regular of fishes ) {
        if ((regular.length % 5 !== 0) && (regular.length % 3 !==  0)){
            regularFish.push(regular)
        }

    }



    return regularFish
}







export const holyFishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = mostHolyFish()

    

    // Start building a string filled with HTML syntax
    let htmlString = '<section class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="holyFishCard">
        <div class="top">
        <div class="left">
            <div><img  class="fish__image" src="${fish.image}" /></div>
            <div class="info">
            
           </div>
        </div>
        <div class="infoBox">${allData(1)}</div>
        </div>
        <div class="notTop"> 
        <div class="fish__name"><div class="name">${fish.name}</div></div>
        <div class="fish__species">${fish.species}</div>
        <div class="fish__length">${fish.length}</div>
        <div class="fish__location">${fish.location}</div>
        <div class="fish__diet">${fish.food}</div>
        </div>
        
        </section>
`
    }
    htmlString += `</section>`

    return htmlString
}
export const kindaHolyFishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = kindaHolyFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<section class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {
        

        // Why is there a backtick used for this string?
        htmlString += `<section class="kindaHolyFishCard">
        <div class="top">
        <div class="left">
            <div><img  class="fish__image" src="${fish.image}" /></div>
            <div class="info">
            
           </div>
        </div>
        <div class="infoBox">${fish.cleaningId}</div>
        </div>
        <div class="notTop"> 
        <div class="fish__name"><div class="name">${fish.name}</div></div>
        <div class="fish__species">${fish.species}</div>
        <div class="fish__length">${fish.length}</div>
        <div class="fish__location">${fish.location}</div>
        <div class="fish__diet">${fish.food}</div>
        </div>
        
        </section>
`
    }
    htmlString += `</section>`

    return htmlString
}
export const nonHolyFishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = nonHolyFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<section class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="regularFishCard">
        <div class="top">
        <div class="left">
            <div><img  class="fish__image" src="${fish.image}" /></div>
            <div class="info">
            
           </div>
        </div>
        <div class="infoBox">${fish.cleaningId}</div>
        </div>
        <div class="notTop"> 
        <div class="fish__name"><div class="name">${fish.name}</div></div>
        <div class="fish__species">${fish.species}</div>
        <div class="fish__length">${fish.length}</div>
        <div class="fish__location">${fish.location}</div>
        <div class="fish__diet">${fish.food}</div>
        </div>
        
        </section>
`
    }
    htmlString += `</section>`

    return htmlString
}


