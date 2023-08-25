import { getFish, getTips } from './fish/database.js'
import { holyFishList, kindaHolyFishList, nonHolyFishList } from './fish/FishList.js'
import {tipCleaningList} from './fish/tips/locations/careTips.js'
import {completeLocationsList} from './fish/tips/locations/locations.js'
import {allData} from './fish/database.js'


// Import the FishList function from the correct module


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute

 */


const holyOnes = document.querySelector(".holyFishCard")

holyOnes.innerHTML = holyFishList()

const kindaHolyOnes = document.querySelector(".kindaHolyFishCard")

kindaHolyOnes.innerHTML= kindaHolyFishList()

const regularOnes = document.querySelector(".regularFishCard")

regularOnes.innerHTML = nonHolyFishList()

const careInformation = document.querySelector(".careInfo")
careInformation.innerHTML = tipCleaningList()

const locationInformation = document.querySelector(".visitedPlaces")
locationInformation.innerHTML = completeLocationsList()







//parentHTMLElement.innerHTML = kindaHolyFishList()

//parentHTMLElement.innerHTML = nonHolyFishList()




