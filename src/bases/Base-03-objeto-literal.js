
const persona = {
   nombre: "Tony",
   apellido: "Stark",
   edad:45,
   direccion:{
      ciudad:"New York",
      zip:456987,
      lat:14.8596,
      lng:34.586
   }
}

const persona2 = {...persona};
persona2.nombre = "Nathan";

console.log(persona2);
console.log(persona);