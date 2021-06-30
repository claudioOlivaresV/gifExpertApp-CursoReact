import React from 'react'

export const GiftGrid = ({ category }) => {
    const apiKey = 'sTxFy5PL8vVzH21aFAGCkzd871IAQfLN';
    const url = 'https://api.giphy.com/v1/gifs/search?q=hola&limit=10&api_key=sTxFy5PL8vVzH21aFAGCkzd871IAQfLN';

    const getGifs = async () => {
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

    }
    getGifs()
    return (
        <>
            <li>{category}</li>
        </>
    )
}
