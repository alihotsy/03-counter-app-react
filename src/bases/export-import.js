import superHeroes from '../data/heroes'

export const getHeroById = (i) =>{
   return superHeroes.find(n => n.id === i)
}
// console.log(getHeroById(2).name);

export const getHeroesByOwners = (ownerName) =>{
   return superHeroes.filter(t => t.owner === ownerName);
}

// getHeroesByOwners("DC").forEach(hero => console.log(hero.name))


