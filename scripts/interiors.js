import { getInteriors } from "./database.js";
import { setInterior } from "./database.js";

const interiors = getInteriors()


export const InteriorSeats = () => {
    let html = ""

    html +='<select name = "interior" id ="interior">'
     html += `<option value="0">Select an Interior Material</option>`
       
       const arrayInterior = interiors.map( (interior) =>{
       return `<option value="${interior.id}" name ="interior">${interior.seat}</option>`
       }
       )
       
       html +=  arrayInterior.join(``)
       html += "</select>"

       return html
       
    }

    document.addEventListener(
      "change",
      (event) => {
     
       
          if (event.target.name === "interior") {
         
            setInterior(parseInt(event.target.value))
           }
         
     }
     )