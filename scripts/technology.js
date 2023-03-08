import { getTechnology } from "./database.js";
import { setTechnology } from "./database.js";

const technology = getTechnology()


export const TechnologyDashboard = () => {
    let html = ""

    html +='<select name ="technology" id ="technology">'
     html += `<option value="0">Select a Technology Package</option>`
       
       const arrayTechnology = technology.map( (tech) =>{
       return `<option value="${tech.id}" name ="technology">${tech.dashboard}</option>`
       }
       )
       
       html +=  arrayTechnology.join(``)
       html += "</select>"

       return html
       
    }

    document.addEventListener(
      "change",
      (event) => {
     
       
          if (event.target.name === "technology") {
         
            setTechnology(parseInt(event.target.value))
           }
         
     }
     )