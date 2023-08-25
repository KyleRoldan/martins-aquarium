import {getLocation} from '../../database.js'



export const locationVisited = () => {

    const locationsArray = []
    const locationDetails = getLocation()

    for (const locations of locationDetails) {
        locationsArray.push(locations)
    }
    

return locationsArray

}

export const completeLocationsList = () => {
    // Invoke the function that you imported from the database module
    const loDetails = locationVisited()

    // Start building a string filled with HTML syntax
    let htmlString = '<section class="visitedSection">'

    // Create HTNL representations of each fish here
    for (const Locate of loDetails ) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="visitedPlaces">
        
        <div><class="cleaning" ${Locate.locationName}" /></div>
        <div class="filter">${Locate.dateVisited}</div>
        <div class="testPH">${Locate.latitude}</div></div>
        <div class="waterType">${Locate.longitude}</div>
        <div class="waterType">${Locate.climate}</div>


         </section>
`
    }
    htmlString += `</section>`

    return htmlString
}