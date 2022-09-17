import giphy from './bases/axios'

const getImage = async() =>{
    try {
       const {data} = (await giphy.get('/random')).data
       const {url} = data.images.original
       
       const img = document.createElement('img');
       img.src = url;
       document.body.appendChild(img)
    } catch (error) {
        console.log("Error en la petición",error);
        throw error
    }
}


getImage()