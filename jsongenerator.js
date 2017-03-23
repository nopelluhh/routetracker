const fs = require('fs')
require('dotenv').config()
const mongoose = require('mongoose')
const boulder = require('./app/models/boulder')
mongoose.connect(process.env.MONGO_DB_URL)


var data = fs.readFileSync('./routes.txt', {encoding: 'utf-8'})
var brah = data.split('\n')
let formatter = /(\S+)\t+([\S ]+)\t+(\S+)\t+(\S+)\t+(\S+)/
let obj = brah.map(line => formatter.exec(line).slice(1, 6)).map(arr => {
    let route = {
        created_at: new Date(arr[0]),
        gym: 'LAB',
        wall: arr[1],
        grade: arr[2],
        setter: arr[3],
        color: arr[4]
    }
    return new boulder(route).save().then(console.log).catch(console.log)
})


// const gyms = ['LAB', 'Cliffs of Id', 'Hollywood Boulders', 'Dogpatch Boulders']
// const walls = {
//     LAB: ['Barrel', 'Prow', 'Horseshoe'],
//     'Cliffs of Id': ['Turtle', 'Left Flipper', 'Right Flipper'],
//     'Hollywood Boulders': ['The Crypt', 'Front Arch', 'Concave'],
//     'Dogpatch Boulders': ['The Great Roof', 'Wave', 'Atrium']
// }
// const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White']

// function makeRoute() {
//     let gym = gyms[randomInt(gyms.length-1)]
//     let wall = walls[gym][randomInt(walls[gym].length-1)]
//     let color = colors[randomInt(7)]
//     return {
//         gym,
//         wall,
//         grade: randomInt(12),
//         color
//     }
// }

// function randomInt(a, b) {
//     if(a && b) {
//         return Math.round(Math.random()*(b-a)) + a
//     }
//     return Math.round(Math.random()*a)
// }

// let routes = []

// for(let i = 0; i < 100; i++) {
//     routes.push(makeRoute())
// }

// console.log(routes)