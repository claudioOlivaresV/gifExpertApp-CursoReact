
export const getGifs = async ( category ) => {
    const apiKey = 'sTxFy5PL8vVzH21aFAGCkzd871IAQfLN';
    const url = 'https://api.giphy.com/v1/gifs/search?q=' + encodeURI(category) + '&limit=6&api_key=' + apiKey;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium
        }
    })
    console.log(gifs);
    return gifs;

}