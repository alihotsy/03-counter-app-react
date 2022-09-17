const apiKey = "6jZRzGffPaxMHHWt7VDI7KzHl9yzJ3H2"

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
.then(resp => resp.json())
.then(({data}) => {
    const {url} = data.images.original
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img)
})
.catch(error => console.log(error))


