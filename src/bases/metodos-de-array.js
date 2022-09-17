const heroes = [
   {
       id: 1,
       name: 'Batman',
       owner: 'DC'
   },
   {
       id: 2,
       name: 'Spiderman',
       owner: 'Marvel'
   },
   {
       id: 3,
       name: 'Superman',
       owner: 'DC'
   },
   {
       id: 4,
       name: 'Flash',
       owner: 'DC'
   },
   {
       id: 5,
       name: 'Wolverine',
       owner: 'Marvel'
   },
];
const exist = heroes.find((heroeId) => heroeId.id == 1);

console.log(exist.name);