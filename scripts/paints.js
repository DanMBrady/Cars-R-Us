import { getPaints } from "./database.js";
import { setPaint } from "./database.js";

const paints = getPaints()





export const PaintColors = () => {
    let html = ""

    
    html +=`<select name = "paint" id ="paint">`
    
     html += `<option value="0">Select a Paint Color</option>`
       
       const arrayPaint = paints.map( (paint) =>{
       return `<option value="${paint.id}" name ="paint">${paint.color}</option>`
       }
       )
       
       html +=  arrayPaint.join(``)
       html += "</select>"

       return html
       

    }

    document.addEventListener(
      "change",
      (event) => {
     
       
          if (event.target.name === "paint") {
         
            setPaint(parseInt(event.target.value))
           }
         
     }
     )
     
