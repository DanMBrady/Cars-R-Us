import { getOrders } from "./database.js"
import { getPaints } from "./database.js"
import { getWheels } from "./database.js"
import { getInteriors } from "./database.js"
import { getTechnology } from "./database.js"

const buildOrderListItem = (order) => {

    const paints = getPaints()

    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.PaintId
        }
    )

    const wheels = getWheels()

    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.WheelsId
        }
    )
    const interiors = getInteriors()

    const foundInteriors = interiors.find(
        (interior) => {
            return interior.id === order.InteriorId
        }
    )
    const technology = getTechnology()

    const foundTechnology = technology.find(
        (tech) => {
            return tech.id === order.TechnologyId
        }
    )

    const totalCost = foundPaint.price + foundWheels.price + foundInteriors.price + foundTechnology.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `
    <article class ="allOrders"> ${foundPaint.color} car with ${foundWheels.size} wheels, ${foundInteriors.seat} interior, and the ${foundTechnology.dashboard} cost ${costString}</article>
    `


/*
     return `
     <article class ="allOrders">Order #${order.id} was placed on ${order.timestamp}</article>
     `
     */
     
}

export const Orders = () => {



    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"



    return html
}
