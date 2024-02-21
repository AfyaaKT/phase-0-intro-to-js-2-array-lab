// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){

    return cats.push(name)
}
destructivelyAppendCat('Ralph')
console.log(cats)



function destructivelyPrependCat(name){
    return cats.unshift(name)
}
destructivelyPrependCat("Bob")
console.log(cats)

function destructivelyRemoveLastCat(){
    return cats.pop()
}
destructivelyRemoveLastCat()
console.log(cats)

function destructivelyRemoveFirstCat(){
    return cats.shift()
}
destructivelyRemoveFirstCat()
console.log(cats)

function appendCat(name){

    const newArray = [...cats]
    newArray.push(name)
    return newArray
}
console.log(appendCat('Broom'))


function prependCat(name){

    const newArray = [...cats]
    newArray.unshift(name)
    return newArray
}
console.log(prependCat('Arnold'))

function removeLastCat(){
    const newArray = [...cats]
    newArray.pop()
    return newArray
}
console.log('remove last cat ' , removeLastCat())

function removeFirstCat(){
    const newArray = [...cats]
    newArray.shift()
    return newArray
}
console.log('remove from first ' , removeFirstCat());