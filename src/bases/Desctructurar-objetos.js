const person = {
   name: "Tony",
   age:45,
   codeName: "IronMan",
}



const createHero = ({age, name, codeName, power = "Has no power"}) =>({id:123546,name,age,codeName,power})
console.log(createHero(person));