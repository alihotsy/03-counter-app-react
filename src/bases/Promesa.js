import { getHeroById } from "./export-import";

export const getHeroByIdAsync = (id) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const hero = getHeroById(id)
            if(hero){
              resolve(hero)
            } else{
                reject("This hero doesn't exist!")
            }
        }, 1500);
    })
}
