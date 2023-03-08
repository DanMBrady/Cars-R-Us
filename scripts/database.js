const database ={
    paints:[
        {id:1,color:"Silver",price:20},
        {id:2,color:"Midnight Blue",price:30},
        {id:3,color:"Firebrick Red",price:70},
        {id:4,color:"Spring Green",price:10},
       ],
       interiors:[
        {id:1,seat:"Biege Fabric",price:50},
        {id:2,seat:"Charcoal Fabric",price:70},
        {id:3,seat:"White Leather",price:80},
        {id:4,seat:"Black Leather",price:100},
       ],
       technology:[
        {id:1,dashboard:"Basic Package",price:200},
        {id:2,dashboard:"Navigation Package",price:500},
        {id:3,dashboard:"Visibilty Package",price:300},
        {id:4,dashboard:"Ultra Package",price:800},
       ],
      wheels:[
        {id:1,size:"17-inch Pair Radial",price:25},
        {id:2,size:"17-inch Pair Radial Black",price:87},
        {id:3,size:"18-inch Pair Spoke Silver",price:75},
        {id:4,size:"18-inch Pair Spoke Black",price:100},
       ],
       customOrders: [
        {
            id: 1,
            PaintId: 3,
            WheelsId: 2,
            InteriorId: 3,
            TechnologyId:4,
            timestamp: 16895837301
        }
    ],

       orderBuilder:[{

    }]
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.technology.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel =>({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order =>({...order}))
}

export const setPaint = (id) => {
    database.orderBuilder.PaintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.InteriorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.TechnologyId = id
}

export const setWheels = (id) => {
    database.orderBuilder.WheelsId = id
}

export const addCustomOrder = () => {
   
    const newOrder = {...database.orderBuilder}

   
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

   
    newOrder.timestamp = Date.now()

   
    database.customOrders.push(newOrder)

    
    database.orderBuilder = {}

   
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
