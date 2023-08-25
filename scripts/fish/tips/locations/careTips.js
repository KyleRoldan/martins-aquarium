

import {getTips} from '../../database.js'



export const fishCare = () => {

    const careArray = []
    const careTips = getTips()

    for (const care of careTips) {
        careArray.push(care)
    }
    

return careArray

}

export const tipCleaningList = () => {
    // Invoke the function that you imported from the database module
    const tips = fishCare()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tipList">'

    // Create HTNL representations of each fish here
    for (const careItems of tips ) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="careInfo">
        
        <div><class="cleaning" ${careItems.cleaning}" /></div>
        <div class="filter">${careItems.filter}</div>
        <div class="testPH">${careItems.testPH}</div></div>
        <div class="waterType">${careItems.waterType}</div>
         </section>
`
    }
    htmlString += `</section>`

    return htmlString
}




