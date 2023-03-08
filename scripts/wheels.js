import { getWheels } from "./database.js";
import { setWheels } from "./database.js"

const wheels = getWheels()


export const WheelSize = () => {
    let html = ""

    html +='<select name = "wheels" id ="wheels">'
     html += `<option value="0">Select a Wheel Style</option>`
       
       const arrayWheel = wheels.map( (wheel) =>{
       return `<option value="${wheel.id}" name ="wheels">${wheel.size}</option>`
       }
       )
       
       html +=  arrayWheel.join(``)
       html += "</select>"

       return html
       
    }

    document.addEventListener(
      "change",
      (event) => {
     
       
          if (event.target.name === "wheels") {
         
            setWheels(parseInt(event.target.value))
           }
         
     }
     )