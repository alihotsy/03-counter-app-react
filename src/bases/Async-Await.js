const miPromesa = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // resolve("We have a value!")
            reject("Fracasó mi promesa :(")
        }, 2000);
    })
}

const medirTiempoAsync = async() =>{
    try {
        console.log("Inicio");

   const respuesta = await miPromesa();
   console.log(respuesta);

   console.log("Fin");
   return "Function executed successfully"
    } catch (error) {
        throw new Error("Capturado el catch!")
    }
}
medirTiempoAsync()
.then(resp => console.log('Error:',resp))
.catch(err => console.log(err))
