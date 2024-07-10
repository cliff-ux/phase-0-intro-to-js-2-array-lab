// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Bosny");
}
function destructivelyPrependCat(name) {
    cats.unshift("masha");
}
function destructivelyRemoveLastCat() {
    cats.pop("Bosny");
}
function destructivelyRemoveFirstCat() {
    cats.shift("masha");
}
function appendCat(name) {
    return [...cats, name];
}
function prependCat(name) {
    return [name, ...cats];
}
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}
function removeFirstCat() {
    return cats.slice(1);
}

beforeEach(function (){
cats.length = 0;
cats.push("Milo","Otis","Garfield")
})