// object

// const person = {
//     name: 'finay',
//     age: '54',
//     location: {
//         city: 'Letchworth',
//         where: 'kitchen'
//     }
// };
//
// const {name: firstName = 'Anon', age} = person
//
//
//
// console.log(firstName, age)
//
// const {where: whereabouts, city} = person.location
// if (whereabouts && city) {
//     console.log(`its ${whereabouts} in ${city}`)
// }

//
// Array
//

const address = ['56 whitehischs', 'letchworth', 'uk']

const [street , city, country] = address

console.log(`you are in ${city} ${country}`)