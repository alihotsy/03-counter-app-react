export const getImage = async() => {
    try {
        const apiKey = '4nhnayaFY5RZcPH1vo8yMKHdIW3g4myz'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json();
        const {url} = data.images.original;

        return url
    } catch (error) {
        console.log(error);
        throw new Error('No existe!')
    }
}