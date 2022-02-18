
    export const getGifs = async(category) =>{

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=RAJ4aCu1to5S4uyQOvkIA99HvtITTrgh&limit=10`;

        const resp= await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img =>{ //Se sacan los datos que brinda la url, es una petición
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

       // setImages(gifs); *estudiar promesas*

       return gifs;
    }