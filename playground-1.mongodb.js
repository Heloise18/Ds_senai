
// show databases

// use ('jam')
// db.people.find()

// const arrpeople = [
//     {
//         name: "Lays",
//         lastname: "Arceles",
//         salary: 0

//     },
//     {
//         name: "Fernanda",
//         lastname: "Fialho",
//         salary: 2.1

//     },
//     {
//         name: "Thais",
//         lastname: "Schitz",
//         salary: 2.1

//     },
//     {
//         name: "Rebeca",
//         lastname: "Ianz",
//         salary: 2.1

//     },
//     {
//         name: "Bruna",-
//         lastname: "Bonk",
//         salary: 2.1

//     }
// ]

// db.people.insertMany(arrpeople);



use ('jam')
db.people.find()

// db.people.find({ salary: { $gte: 1}}, {name: 1, lastname: 1} )


// db.people.updateOne(
//     {_id: ObjectId('6981f6fcb569151c9d9875ee')},
//     {$set: {name: "Senhorita"}}
// )

// db.people.updateMany(
//     {name: /s/},
//     { $set: {salary: 3000}}
// )

// db.people.deleteOne({ 
//     _id: ObjectId('6981f6fcb569151c9d9875ee')
// })


// db.people.deleteOne({ 
//     _id: ObjectId('6981f6fcb569151c9d9875ee')
// })