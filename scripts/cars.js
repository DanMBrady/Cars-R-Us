import { getPaints } from "./database.js"
import { InteriorSeats } from "./interiors.js"
import { PaintColors } from "./paints.js"
import { TechnologyDashboard } from "./technology.js"
import { WheelSize } from "./wheels.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener( 
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.id === "orderButton"){
            addCustomOrder()
        }
    }
)

export const Cars = () => {
    return `
    <div class ="header">
        <h1>Cars 'R Us: Personal Car Builder</h1>
</div>
        <article class="choices">

        <div class ="first">
       
            <section class="choice">
                <h2>Paints</h2>
                ${PaintColors()}
            </section>
            <section class="choice">
                <h2>Interiors</h2>
           ${InteriorSeats()}
                </section>
                
        </div>

        <div class ="second">
            <section class="choice">
                <h2>Technology</h2>
             ${TechnologyDashboard()}
            </section>
            <section class="choice">
                <h2>Wheels</h2>
                ${WheelSize()}
                
            </section>
        </div>
        </article>

        <article>
        <button id="orderButton">Place Car Order</button>
    </article>
    <article class="customOrders">
    <h2>Custom Car Orders</h2>
    
   ${Orders()}
   
</article>

      
    `
}