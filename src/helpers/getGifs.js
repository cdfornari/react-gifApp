

export const getGifs = async(category) =>{

    console.log(category)
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=6&api_key=VE63rDmW8VtIjg7ZpJRw1uRMDAwqIx7Z`

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(gif =>{
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    })

    return gifs;
}